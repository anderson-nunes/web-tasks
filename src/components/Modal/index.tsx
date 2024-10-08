import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles.module.css";

interface NoteDialogProps {
  onAddNote: (note: string) => void;
}

const NoteDialog: React.FC<NoteDialogProps> = ({ onAddNote }) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [newNote, setNewNote] = useState("");

  const handleOpenDialog = () => {
    setDialogOpen(true);
    setNewNote("");
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const handleApplyNote = () => {
    onAddNote(newNote);
    setDialogOpen(false);
  };

  return (
    <div className={styles.container}>
      <FontAwesomeIcon
        icon={faCirclePlus}
        className={styles.icon}
        onClick={handleOpenDialog}
      />

      {dialogOpen && (
        <div className={styles.dialog}>
          <div className={styles.card}>
            <h2 className={styles.title}>NOVA TAREFA</h2>
            <div className={styles.inputContainer}>
              <input
                value={newNote}
                onChange={(e) => setNewNote(e.target.value)}
                type="text"
                placeholder="Nota de pesquisa..."
                className={styles.input}
              />
            </div>
            <div className={styles.actions}>
              <button className={styles.btnCancel} onClick={handleCloseDialog}>
                CANCELAR
              </button>
              <button className={styles.btnApply} onClick={handleApplyNote}>
                APLICAR
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NoteDialog;
