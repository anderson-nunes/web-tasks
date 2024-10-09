import { useState, useMemo, useEffect } from "react";
import Cookies from "js-cookie";
import {
  createTask,
  deleteTask,
  getTasks,
  updateTask,
} from "../services/tasks";

export type Note = {
  id: number;
  title: string;
  status: number;
  creator_id: string;
};

export type Status = "Todos" | "Concluídos" | "Não Concluídos";

export function useNotes() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [searchNotes, setSearchNotes] = useState("");
  const [selectedFilter, setSelectedFilter] = useState<Status>("Todos");

  const findAllTaks = async () => {
    const payload = await getTasks();

    setNotes(payload);
  };

  useEffect(() => {
    findAllTaks();
  }, []);

  const addNote = async (newNote: string) => {
    const newNoteObj = {
      id: new Date().getTime(),
      title: newNote,
      status: 0,
      creator_id: Cookies.get("user_id") || "none",
    };

    setNotes((prevNotes) => [...prevNotes, newNoteObj]);

    try {
      const payload = await createTask({
        title: newNoteObj.title,
        status: newNoteObj.status,
        creator_id: newNoteObj.creator_id,
      });

      setNotes((prevNotes) =>
        prevNotes.map((note) =>
          note.id === payload.id ? { ...note, ...payload } : note
        )
      );
    } catch (error) {
      console.log(error);

      deleteNote(newNoteObj.id);
    }
  };

  const deleteNote = async (id: number) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));

    try {
      await deleteTask(id);
    } catch (error) {
      console.log(error);

      findAllTaks();
    }
  };

  const setEditingNote = (id: number) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === id ? { ...note, isEditing: true } : note
      )
    );
  };

  const updateNote = async (note: Note) => {
    setNotes((prevNotes) =>
      prevNotes.map((prevNote) =>
        prevNote.id === note.id ? { ...prevNote, ...note } : prevNote
      )
    );

    try {
      await updateTask(note.id, {
        title: note.title,
        status: note.status,
        creator_id: note.creator_id,
      });
    } catch (error) {
      console.log(error);

      findAllTaks();
    }
  };

  const saveNote = async (id: number, newText: string) => {
    setNotes((prevNotes) =>
      prevNotes.map((prevNote) =>
        prevNote.id === id ? { ...prevNote, title: newText } : prevNote
      )
    );

    try {
      await updateTask(id, {
        title: newText,
      });
    } catch (error) {
      console.log(error);

      findAllTaks();
    }
  };

  const filteredNotes = useMemo(() => {
    if (searchNotes !== "") {
      return notes.filter((note) =>
        note.title.toLowerCase().includes(searchNotes.toLowerCase())
      );
    }

    if (selectedFilter !== "Todos") {
      return notes.filter((note) =>
        selectedFilter === "Concluídos" ? note.status === 1 : note.status === 0
      );
    }

    return notes;
  }, [notes, searchNotes, selectedFilter]);

  return {
    notes,
    searchNotes,
    setSearchNotes,
    selectedFilter,
    setSelectedFilter,
    addNote,
    deleteNote,
    setEditingNote,
    saveNote,
    updateNote,
    filteredNotes,
  };
}
