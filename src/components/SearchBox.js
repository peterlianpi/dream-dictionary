import React, { useState } from "react";
import "../App.css";
import { useDarkMode } from "./DarkMode/DarkModeContext";
import "./DarkMode/DarkModeToggle.css";

function SearchBox({ data }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBlogContent, setSelectedBlogContent] = useState(""); // Corrected variable name
  const { darkMode } = useDarkMode();
  const [suggestions, setSuggestions] = useState([]);

  // data is like : BlogDetail [{BlogDetailId:1, BlogId:1, BlogContent:"..."},{BlogDetailId:2, BlogId:1, BlogContent:"..."},{BlogDetailId:32, BlogId:2, BlogContent:"..."},{BlogDetailId:33, BlogId:2, BlogContent:"..."}], search and compare with BlogContent text

  const updateSuggestions = (query) => {
    const filteredQuestions = data.filter((BlogDetail) =>
      BlogDetail.BlogContent.toLowerCase().includes(query.toLowerCase())
    );
    setSuggestions(filteredQuestions);
  };

  const handleSearch = () => {
    if (suggestions.length > 0) {
      // If suggestions are available, take the first suggestion
      const selectedBlogContent = suggestions[0];
      //   navigate(`/numberselector/${selectedBlogContent.questionNo}`);
      setSelectedBlogContent(selectedBlogContent.BlogContent);
    } else {
      alert("Question not found");
    }
  };

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <div className="searchbox">
        <p className="search-title">
          မြင်မက်ခဲ့သောအိပ်မက်ထဲမှ အဓိကဇာတ်ကောင်များ (သို့) အရာဝတ္ထုများကို
          မြန်မာစာလုံးပေါင်းဖြင့် အောက်ပါအကွက်လေးထဲ ထည့်ပါ။
        </p>
        <input
          className="input"
          type="text"
          placeholder="ကခ"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            updateSuggestions(e.target.value);
          }}
          list="suggestions"
          onInput={(e) => {
            const selectedBlogContent = suggestions.find(
              (question) => question.BlogContent === e.target.value
            );
            if (selectedBlogContent) {
              setSelectedBlogContent(selectedBlogContent.BlogContents);
            }
          }}
        />
        <datalist id="suggestions">
          {suggestions.map((blogDetail, index) => (
            <option
              key={index}
              value={blogDetail.BlogContent}
              onSelect={handleSearch}
            ></option>
          ))}
        </datalist>
        <button className="search" onClick={handleSearch}>
          Search
        </button>
        {selectedBlogContent && (
          <p className="search-answer">{selectedBlogContent}</p>
        )}
      </div>
    </div>
  );
}

export default SearchBox;
