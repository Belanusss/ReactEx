import React from "react";
import { useParams, Link } from "react-router-dom";

function NoteDetails() {
  const { id } = useParams();
  const notes = JSON.parse(localStorage.getItem("notes") || "[]");
  const note = notes.find((n) => n.id.toString() === id);

  if (!note)
    return (
      <div className="page">
        <p>Nie znaleziono wspomnienia.</p>
        <Link to="/list">← Powrót</Link>
      </div>
    );

  return (
    <div className="page">
      <h2>Wspomnienie</h2>
      <p>{note.text}</p>
      <p>
        📍 {note.latitude}, {note.longitude}
      </p>
      <p>🕓 {note.date}</p>
      <Link to="/list" className="btn">
        Powrót
      </Link>
    </div>
  );
}

export default NoteDetails;
