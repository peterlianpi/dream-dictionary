import React, { useState, useEffect } from "react";
import "../App.css";
import { useDarkMode } from "./DarkMode/DarkModeContext";
import "./DarkMode/DarkModeToggle.css";

function AnswerList({ data }) {
  const [answers, setAnswers] = useState([]);
  const { darkMode } = useDarkMode();
  useEffect(() => {
    setAnswers(data);
  }, [data]);

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      {answers.map((answer, index) => (
        <div
          className="answer-list-container"
          key={index}
          blog-detail-id={answer.BlogDetailId}
          blog-id={answer.BlogId}
        >
          <div className="number-list">{index + 1}</div>
          <div className="answer-list">{answer.BlogContent}</div>
        </div>
      ))}
    </div>
  );
}

export default AnswerList;
