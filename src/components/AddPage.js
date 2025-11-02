import React, { useState } from "react";

function AddPage() {
  const [text, setText] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const getLocation = () => {
    if (!navigator.geolocation) {
      alert("Your browser does not support geolocation.");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLatitude(pos.coords.latitude.toFixed(5));
        setLongitude(pos.coords.longitude.toFixed(5));
      },
      (err) => alert("Location error: " + err.message)
    );
  };

  const saveNote = async () => {
    if (!text || !latitude || !longitude) {
      alert("Please fill in all fields.");
      return;
    }

    const newNote = {
      id: Date.now(),
      text,
      latitude,
      longitude,
      date: new Date().toLocaleString("pl-PL"),
    };

    // Локальное сохранение
    const existing = JSON.parse(localStorage.getItem("notes") || "[]");
    localStorage.setItem("notes", JSON.stringify([...existing, newNote]));

    // Отправка данных на API
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: text,
          body: `Lat:${latitude}, Lon:${longitude}`,
          userId: 1,
        }),
      });
      const data = await res.json();
      console.log("Saved in API:", data);
      alert("Notes saved (also in API)");
    } catch (err) {
      console.error("API error:", err);
      alert("Error while writing to API");
    }

    setText("");
    setLatitude("");
    setLongitude("");
  };

  return (
    <div className="page">
      <h2>Create a note </h2>
      <textarea
        placeholder="Write here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="coords">
        <input
          type="text"
          placeholder="Width"
          value={latitude}
          onChange={(e) => setLatitude(e.target.value)}
        />
        <input
          type="text"
          placeholder="Length"
          value={longitude}
          onChange={(e) => setLongitude(e.target.value)}
        />
        <button onClick={getLocation}>Your coordinates</button>
      </div>
      <button className="btn" onClick={saveNote}>
        Save
      </button>
    </div>
  );
}

export default AddPage;
