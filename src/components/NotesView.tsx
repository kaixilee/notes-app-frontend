// src/components/NotesView.tsx
import React, { useState, useEffect } from "react";
import TopPanel from "./TopPanel";

const NotesView: React.FC = () => {
  const [notes, setNotes] = useState<string[]>([]);
  const [newNote, setNewNote] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/notes")
      .then((response) => response.json())
      .then((data) => setNotes(data))
      .catch((err) => {
        setError("Failed to fetch notes");
        console.error(err);
      });
  }, []);

  const handleAddNote = () => {
    if (newNote.trim() === "") return;

    fetch("/api/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content: newNote }),
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((err) => {
            throw new Error(err.message);
          });
        }
        return response.json();
      })
      .then((data) => {
        setNotes([...notes, data.note]);
        setNewNote("");
        setError(null);
      })
      .catch((err) => {
        setError("Failed to add note");
        console.error(err);
      });
  };

  return (
    <div className="notes-view">
      <TopPanel />
      <div className="main-content">
        <ul>
          {notes.map((note, index) => (
            <li key={index}>{note}</li>
          ))}
        </ul>
        <input
          type="text"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
        />
        <button onClick={handleAddNote} disabled={newNote.trim() === ""}>
          Add Note
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </div>
  );
};

export default NotesView;
