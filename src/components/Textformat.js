import React, { useState } from "react";

const Textformat = (props) => {
  const [text, setText] = useState("");
  const [originalText, setOriginalText] = useState(text);

  const handleDelete = () => {
    setText("");
    setOriginalText("");
    props.showAlert("danger", "Deleted succesfully");
  };

  const handleUPClick = () => {
    const spacedText = text.replace(/([a-z])([A-Z])/g, "$1 $2").toUpperCase();
    setText(spacedText);
    setOriginalText(spacedText);
    props.showAlert("success", "Converted to uppercase succesfully");
  };

  const handleCamelCase = () => {
    const words = text.trim().split(/\s+/);
    const camelCaseText = words
      .map((word, index) => {
        if (index === 0) return word.toLowerCase();
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join("");
    setOriginalText(text);
    setText(camelCaseText);
    props.showAlert("success", "Converted to Camelcase succesfully");
  };

  const handleLowercase = () => {
    const spacedText = text.replace(/([a-z])([A-Z])/g, "$1 $2").toLowerCase();
    setText(spacedText);
    setOriginalText(spacedText);
    props.showAlert("success", "Converted to lowercase succesfully");
  };

  const handleOnChange = (event) => {
    const newText = event.target.value;
    setText(newText);
    setOriginalText(newText);
  };

  const handleReset = () => {
    setText(originalText);
    props.showAlert("success", "Reset succesfully");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    document.getSelection().removeAllRanges();
    props.showAlert("success", "copied to clipboard");
  };

  const handlePaste = async () => {
    const clipboardText = await navigator.clipboard.readText();
    setText(clipboardText);
    props.showAlert("success", "Pasted");
  };

  const handleRemoveExtraSpaces = () => {
    const trimmedText = text.replace(/\s+/g, " ").trim();
    setText(trimmedText);
    setOriginalText(trimmedText);
    props.showAlert("success", "Extra space removed succesfully");
  };

  const handleFindAndReplace = () => {
    const findText = prompt("Enter the text to find:");
    const replaceText = prompt("Enter the replacement text:");
    if (findText && replaceText !== null) {
      const replacedText = text.replaceAll(findText, replaceText);
      setText(replacedText);
      setOriginalText(replacedText);
    }
  };
  const countparagraphs = () => {
    const paragraphs = text.split(/\n+/).filter(Boolean).length;
    return paragraphs;
  };
  const countsentence = () => {
    const sentences = text.split(/[.!?]+/).filter(Boolean).length;
    return sentences;
  };
  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;
  const charCount = text.length;
  const readingTimeMinutes = Math.floor(wordCount * 0.008);
  const readingTimeSeconds = Math.round(
    (wordCount * 0.008 - readingTimeMinutes) * 60
  );

  return (
    <div
      className="container"
      style={{
        color: props.mode === "dark" ? "white" : "black",
        transition: "all 0.5s ease", // Smooth transition for color changes
      }}
    >
      <div className="mb-3 text-center">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          <h1>{props.heading}</h1>
        </label>
        <textarea
          onChange={handleOnChange}
          value={text}
          style={{
            backgroundColor: props.mode === "dark" ? "#055160" : "white",
            color: props.mode === "dark" ? "white" : "black",
            transition: "all 0.5s ease", // Smooth transition for textarea
          }}
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
        ></textarea>
      </div>
      <button
        className="btn btn-info mx-2 my-1"
        onClick={handleUPClick}
        disabled={!text.trim()}
      >
        Convert to UPPERCASE
      </button>
      <button
        className="btn btn-primary mx-2 my-1"
        onClick={handleCamelCase}
        disabled={!text.trim()}
      >
        Convert to camelCase
      </button>
      <button
        className="btn btn-warning mx-2 my-1"
        onClick={handleLowercase}
        disabled={!text.trim()}
      >
        Convert to lowercase
      </button>
      <button
        className="btn btn-danger mx-2 my-1"
        onClick={handleDelete}
        disabled={!text.trim()}
      >
        Delete
      </button>
      <button
        className="btn btn-secondary mx-2 my-1"
        onClick={handleReset}
        disabled={!text.trim()}
      >
        Reset to Original
      </button>
      <button
        className="btn btn-success mx-2 my-1"
        onClick={handleCopy}
        disabled={!text.trim()}
      >
        Copy Text
      </button>
      <button className="btn btn-dark mx-2 my-1" onClick={handlePaste}>
        Paste Text
      </button>
      <button
        className="btn btn-outline-secondary mx-2 my-1"
        onClick={handleRemoveExtraSpaces}
        disabled={!text.trim()}
      >
        Remove Extra Spaces
      </button>
      <button
        className="btn btn-outline-info mx-2 my-1 "
        onClick={handleFindAndReplace}
        disabled={!text.trim()}
      >
        Find & Replace
      </button>

      <div className="container my-3">
        <h3>Your Text Summary</h3>
        <p>
          <b>Text Analysis : </b> <b>{wordCount}</b> words|<b>{charCount}</b>{" "}
          characters | <b>{countparagraphs()}</b> Paragraphs |{" "}
          <b>{countsentence()}</b> sentences
        </p>
        <p>
          {" "}
          <b>Time to read :</b>
          {readingTimeMinutes} minutes and {readingTimeSeconds} second(s)
        </p>
      </div>
      <h2>PREVIEW</h2>
      <p>
        {text.length > 0
          ? text
          : "Enter something in the textbox above to preview it here"}
      </p>
    </div>
  );
};

export default Textformat;
