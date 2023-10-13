import React, { useState, useEffect } from "react";
import "../App.css";
import { useParams, useNavigate } from "react-router-dom";
import { useDarkMode } from "./DarkMode/DarkModeContext";
import "./DarkMode/DarkModeToggle.css";
import AnswerList from "./AnswerList";

function AnswerPage({ data }) {
  const { BlogId } = useParams();
  const { darkMode } = useDarkMode();
  const [answers, setAnswers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Filter the data to get answers for the specific BlogId
    const blogAnswers = data.BlogDetail.filter(
      (blog) => blog.BlogId === parseInt(BlogId)
    );
    setAnswers(blogAnswers);
  }, [data, BlogId]);

  const Home = () => {
    navigate("/");
  };
  return (
    <div className={darkMode ? "dark-mode main-answer" : "main-answer"}>
      <button className="home-button" onClick={Home}>
        Home
      </button>
      <AnswerList data={answers} />
    </div>
  );
}

export default AnswerPage;
