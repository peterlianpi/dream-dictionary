import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DarkModeProvider } from "./components/DarkMode/DarkModeContext";
import DarkModeToggle from "./components/DarkMode/DarkModeToggle";
import Home from "./components/Home";
import AnswerPage from "./components/AnswerPage";
import Nodata from "./components/DarkMode/img/download.png";
import "./App.css";

function App() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("data.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((jsonData) => {
        setData(jsonData);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setError("An error occurred while fetching data.");
        setIsLoading(false);
      });
  }, []);
  if (isLoading) return <p className="loader" />;
  if (error) {
    return <div className="error-message">{error}</div>;
  }
  if (!data) {
    return (
      <div class="empty-state">
        <div class="empty-state__content">
          <div class="empty-state__icon">
            <img src={Nodata} alt="no-data" />
          </div>
          <div class="empty-state__message">No records has been added yet.</div>
          <div class="empty-state__help">
            Add a new record by simpley clicking the button on top right side.
          </div>
        </div>
      </div>
    );
  }

  return (
    <DarkModeProvider>
      <BrowserRouter>
        <div>
          <DarkModeToggle />
        </div>
        <Routes>
          <Route path="/" exact element={<Home data={data} />} />
          <Route path="/answer/:BlogId" element={<AnswerPage data={data} />} />
        </Routes>
      </BrowserRouter>
    </DarkModeProvider>
  );
}

export default App;
