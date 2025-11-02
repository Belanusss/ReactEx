import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function NotesList() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const localNotes = JSON.parse(localStorage.getItem("notes") || "[]");

    
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then((res) => res.json())
      .then((apiNotes) => {
        
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
            <div className="alignl">
              <p>{n.text}</p>
            </div>
            <div className="alignr">
              <p>{n.latitude} </p>
              <p>{n.longitude}
              </p>
            </div>
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