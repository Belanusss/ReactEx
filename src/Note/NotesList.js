import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function NotesList() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    // Локальные заметки
    const localNotes = JSON.parse(localStorage.getItem("notes") || "[]");

    // Загрузка данных из API
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then((res) => res.json())
      .then((apiNotes) => {
        // Преобразуем формат API, чтобы совпадал с локальным
        const formatted = apiNotes.map((p) => ({
          id: p.id,
          text: p.title,
          latitude: "—",
          longitude: "—",
          date: "z API",
        }));
        setNotes([...localNotes, ...formatted]);
      })
      .catch((err) => console.error("Błąd API:", err));
  }, []);

  return (
    <div className="page">
      <h2>Your Notes</h2>
      {notes.length === 0 ? (
        <p>No Notes.</p>
      ) : (
        notes.map((n) => (
          <div key={n.id} className="note-item">
            <p>{n.text}</p>
            <p>
              {n.latitude}, {n.longitude}
            </p>
            <Link className="details" to={`/details/${n.id}`}>
              Look
            </Link>
          </div>
        ))
      )}
    </div>
  );
}

export default NotesList;