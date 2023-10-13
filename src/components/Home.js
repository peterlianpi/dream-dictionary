import React, { useState, useEffect } from "react";
import { useDarkMode } from "./DarkMode/DarkModeContext";
import "./DarkMode/DarkModeToggle.css";
import NameBox from "./NameBox";
import { useNavigate } from "react-router-dom";
import SearchBox from "./SearchBox";

function Home({ data }) {
  const { darkMode } = useDarkMode();
  const [blogHeader, setBlogHeader] = useState([]);
  const [blogDetail, setBlogDetail] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Set the initial title
    setBlogHeader(data.BlogHeader);
    setBlogDetail(data.BlogDetail);
  }, [data]);

  const handleBlockClick = (selectedTitle) => {
    // Find the BlogId based on the selected BlogTitle
    const selectedBlog = blogDetail.find(
      (blog) => blog.BlogId === selectedTitle.BlogId
    );

    // const selectedBlog = selectedTitle.BlogId;
    if (selectedBlog) {
      navigate(`/answer/${selectedBlog.BlogId}`);
    }
  };

  return (
    <main>
      <div className={darkMode ? "dark-mode main" : "main"}>
        <SearchBox data={blogDetail} />
        <div className="title-container">
          {blogHeader.map((BlogTitle, index) => (
            <NameBox
              key={index}
              title={BlogTitle}
              onSelect={handleBlockClick}
            />
          ))}
        </div>
        <footer
          className={darkMode ? "footer-bar footer-bar-dark" : "footer-bar"}
        >
          <div>
            made with ❤ by{" "}
            <a
              className={darkMode ? "link-text" : ""}
              href="https://www.facebook.com/p.lianpi"
            >
              Peter
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}
export default Home;
