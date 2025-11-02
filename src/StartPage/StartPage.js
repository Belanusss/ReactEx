import React from "react";
import { Link } from "react-router-dom";

function StartPage() {
  return (
    <div className="page">
      <h1 className="header">Field Notes</h1>
      <p className="txt">Create your Notes.</p>
      <div className="fotmation">
        <Link className="btn" to="/add">
          Start
        </Link>
      </div>
    </div>
  );
}

export default StartPage;