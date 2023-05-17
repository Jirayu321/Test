import { useState } from "react";
import { BsArrowLeftRight } from "react-icons/bs";
import "./App.css";

const App = () => {
  const [inputLanguage, setInputLanguage] = useState("English");
  const [outputLanguage, setOutputLanguage] = useState("Thai");
  const [fileContent, setFileContent] = useState("");

  const handleFileInput = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (evt) => {
      // Assuming the file contains text
      setFileContent(evt.target.result);
    };
    reader.readAsText(file);
  };

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([fileContent], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "translated.txt";
    document.body.appendChild(element);
    element.click();
  };

  const switchLanguages = () => {
    let temp = inputLanguage;
    setInputLanguage(outputLanguage);
    setOutputLanguage(temp);
  };

  return (
    <>
      <div className="navbar">
        <h1>AI Translator</h1>
      </div>

      <div className="app">
        <div className="left-side">
          <select
            value={inputLanguage}
            onChange={(e) => setInputLanguage(e.target.value)}
          >
            <option value="English">English</option>
            <option value="Thai">Thai</option>
          </select>
          <input
            type="file"
            accept=".jpg,.jpeg,.png"
            onChange={handleFileInput}
          />
        </div>
        <div className="middle">
          <button onClick={switchLanguages} className="inmiddle">
            <BsArrowLeftRight />
          </button>
        </div>
        <div className="right-side">
          <select
            value={outputLanguage}
            onChange={(e) => setOutputLanguage(e.target.value)}
          >
            <option value="English">English</option>
            <option value="Thai">Thai</option>
          </select>
          <button onClick={handleDownload}>Download Translation</button>
        </div>
      </div>
    </>
  );
};

export default App;
