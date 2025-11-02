import React from "react";
import { Link } from "react-router-dom";

function StartPage() {
  return (
    <div className="page">
      <h1>Field Notes</h1>
      <p>Create your Notes.</p>
      <Link className="btn" to="/add">
        Start
      </Link>
    </div>
  );
}

export default StartPage;