import React, { useState } from "react";

const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example"
};

export default function XSpellCheck() {
  const [text, setText] = useState("");
  const [suggestion, setSuggestion] = useState("");

  const handleChange = (e) => {
    const inputText = e.target.value;
    setText(inputText);

    if (!inputText) {
      setSuggestion("");
      return;
    }

    const words = inputText.split(/\s+/); // split by spaces
    const firstWrongWord = words.find(
      (word) => customDictionary[word.toLowerCase()]
    );

    if (firstWrongWord) {
      const correctedWord = customDictionary[firstWrongWord.toLowerCase()];
      setSuggestion(`Did you mean: ${correctedWord}?`);
    } else {
      setSuggestion("");
    }
  };

  return (
    <div style={{ width: "400px", margin: "50px auto", fontFamily: "Arial" }}>
      <h2>Spell Check and Auto-Correction</h2>
      <textarea
        rows="5"
        cols="50"
        placeholder="Enter text..."
        value={text}
        onChange={handleChange}
        style={{ padding: "10px", fontSize: "16px" }}
      />
      {suggestion && (
        <p style={{ marginTop: "10px", color: "blue" }}>{suggestion}</p>
      )}
    </div>
  );
}
