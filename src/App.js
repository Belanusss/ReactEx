import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import StartPage from "./StartPage/StartPage";
import AddPage from "./components/AddPage";
import NotesList from "./Note/NotesList";
import NoteDetails from "./Note/NoteDetails";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="nav">
        <Link to="/">Start</Link>
        <Link to="/add">Add</Link>
        <Link to="/list">Notes</Link>
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
