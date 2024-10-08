import React, { useEffect, useState } from "react";
import { useNotes, Status } from "../../hooks/useNotes";
import Modal from "../../components/Modal";
import Select from "../../components/Select";
import styles from "./styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faPen, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { Header } from "../../components/Header";

const TodoList: React.FC = () => {
  const {
    addNote,
    setEditingNote,
    saveNote,
    deleteNote,
    searchNotes,
    setSearchNotes,
    filteredNotes,
    updateNote,
    selectedFilter,
    setSelectedFilter,
  } = useNotes();

  const [editingNoteId, setEditingNoteId] = useState<number | null>(null);
  const [editingText, setEditingText] = useState<string>("");

  const handleEditClick = (noteId: number, currentText: string) => {
    setEditingNoteId(noteId);
    setEditingText(currentText);
  };

  const handleSaveNote = (noteId: number) => {
    if (editingText.trim() !== "") {
      saveNote(noteId, editingText);
      setEditingNoteId(null);
      setEditingText("");
    }
  };

  return (
    <>
      <Header hasClose={false} labelAction="Sair" />
      <div className={styles.pageContainer}>
        <div className={styles.todoContainer}>
          <h1 className={styles.title}>LISTA DE TAREFAS</h1>
          <div className={styles.searchContainer}>
            <div className={styles.searchInputContainer}>
              <input
                value={searchNotes}
                onChange={(e) => setSearchNotes(e.target.value)}
                type="text"
                placeholder="Nota de pesquisa..."
                className={styles.searchInput}
              />
              <FontAwesomeIcon
                className={`${styles.icon} ${styles.size} ${styles.borderPurple}`}
                icon={faSearch}
              />
            </div>
            <div className={styles.selectContainer}>
              <Select
                modelValue={selectedFilter}
                items={['Todos', 'Concluídos', 'Não Concluídos']}
                onUpdate={(value) => setSelectedFilter(value as Status)}
              />
            </div>
          </div>

          <div className={styles.notesContainer}>
            {filteredNotes.length === 0 ? (
              <h2 className={styles.noNotesMessage}>Crie suas tarefas</h2>
            ) : (
              filteredNotes.map((note) => (
                <div key={note.id} className={styles.noteItem}>
                  <input
                    type="checkbox"
                    checked={!!note.status}
                    onChange={() => {
                      updateNote({
                        ...note,
                        status: note.status ? 0 : 1,
                      })
                    }}
                    className={styles.checkbox}
                  />
                  <div className={styles.noteContent}>
                    {editingNoteId === note.id ? (
                      <input
                        type="text"
                        value={editingText}
                        onChange={(e) => setEditingText(e.target.value)}
                        onBlur={() => handleSaveNote(note.id)}
                        onKeyDown={(e) => e.key === "Enter" && handleSaveNote(note.id)}
                        className={styles.editInput}
                      />
                    ) : (
                      <label className={styles.noteLabel}>{note.title}</label>
                    )}
                  </div>
                  <div className={styles.noteActions}>
                    {editingNoteId === note.id ? (
                      <FontAwesomeIcon
                        className={styles.icon}
                        icon={faPen}
                        onClick={() => handleSaveNote(note.id)}
                      />
                    ) : (
                      <FontAwesomeIcon
                        className={styles.icon}
                        icon={faPen}
                        onClick={() => handleEditClick(note.id, note.title)}
                      />
                    )}
                    <FontAwesomeIcon
                      className={styles.icon}
                      icon={faTrashCan}
                      onClick={() => deleteNote(note.id)}
                    />
                  </div>
                </div>
              ))
            )}
            <div className={styles.modalContainer}>
              <Modal onAddNote={addNote} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoList;
