import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import StartPage from "./components/StartPage";
import AddPage from "./components/AddPage";
import NotesList from "./components/NotesList";
import NoteDetails from "./components/NoteDetails";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="nav">
        <Link to="/">Start</Link>
        <Link to="/add">Dodaj</Link>
        <Link to="/list">Wspomnienia</Link>
      </div>

      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/add" element={<AddPage />} />
        <Route path="/list" element={<NotesList />} />
        <Route path="/details/:id" element={<NoteDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
