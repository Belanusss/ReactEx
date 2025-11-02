import React from "react";
import { useParams, Link } from "react-router-dom";

function NoteDetails() {
  const { id } = useParams();
  const notes = JSON.parse(localStorage.getItem("notes") || "[]");
  const note = notes.find((n) => n.id.toString() === id);

  if (!note)
    return (
      <div className="page">
        <p>No notes.</p>
        <Link to="/list">Back</Link>
      </div>
    );

  return (
    <div className="page">
      <h2>Notes</h2>
      <p>{note.text}</p>
      <p>
         {note.latitude}, {note.longitude}
      </p>
      <p> {note.date}</p>
      <Link to="/list" className="btn">
        Back
      </Link>
    </div>
  );
}

export default NoteDetails;
