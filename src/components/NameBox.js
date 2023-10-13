import React from "react";
import "../App.css";

function NameBox(props) {
  const title = props.title;
  const clicked = () => {
    props.onSelect(title);
  };

  function extractTextInBarckets(text) {
    const regex = /\[([^\]]*)\]/;
    const match = text.match(regex);
    return match ? match[1] : "";
  }

  // Separate the text inside brackets and outside brackets
  const textInBrackets = extractTextInBarckets(title.BlogTitle);
  const textAfterBrackets = title.BlogTitle.split(/\[.*\]/)[1];

  return (
    <div className="titlebox name-con" data-id={title.BlogId} onClick={clicked}>
      <div className="bracket-text">{textInBrackets}</div>
      <div className="title-text">{textAfterBrackets}</div>
    </div>
  );
}

export default NameBox;
