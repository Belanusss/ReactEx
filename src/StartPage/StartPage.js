import React from "react";
import { Link } from "react-router-dom";

function StartPage() {
  return (
    <div className="page">
      <h1>Witaj w GeoVibe 💛</h1>
      <p>Zapamiętaj swoje emocje i miejsca, które coś dla Ciebie znaczą.</p>
      <Link className="btn" to="/add">
        Zacznij
      </Link>
    </div>
  );
}

export default StartPage;