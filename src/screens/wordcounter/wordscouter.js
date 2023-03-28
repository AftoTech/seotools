import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "./wordcounter.css";
const WordsCounter = () => {
  const [CharacterCountWithoutSpace, setCharacterCountWithoutSpace] =
    useState(0);
  const [CharacterCountWithSpace, setCharacterCountWithSpace] = useState(0);
  const [WordCount, setWordCount] = useState(0);
  const [estimatedReaTime, setestimatedReadtime] = useState();

  function readingTime(text) {
    const wordsPerMinute = 200; // Average case.
    let result;
    let textLength = text.split(" ").length; // Split by words
    if (textLength > 0) {
      let value = Math.ceil(textLength / wordsPerMinute);
      result = `~${value} min read`;
    }
    setestimatedReadtime(result)
  }

  const Calculate = () => {
    var text = document.getElementById("inputField").value;
    var regex = /[a-zA-Z0-9]/g; // only count letters and numbers
    var regex2 = /\s+/; // count words
    // chatchterLength
    let lengthwithoutspace = text.match(regex).length;
    let lengthwithspace = text.trim().length;
    setCharacterCountWithoutSpace(lengthwithoutspace);
    setCharacterCountWithSpace(lengthwithspace);
    // Word count
    let wordcount = text.trim().split(regex2).length;
    setWordCount(wordcount);
    // readTime
    readingTime(text);
  };
  return (
    <div>
      {/* Header */}
      <div class="header">
        <div class="headerlogo">
          <p class="HeaderTitle">Words Counter</p>
        </div>
      </div>
      {/* InputSection */}
     
      <div className="inputSectionContainer">
        <div className="inputtitlecontainer">
          <p>Input :</p>
         </div>
        <textarea
          className="teatAreastyle"
          id="inputField"
          placeholder="Enter your text here..."
        ></textarea>
        
    </div>
      <div>
        {/* butto section */}
      <div className="calculatebutton" >
        <button className="buttonstyle"  onClick={Calculate}>Calculate</button>
        </div>
        <div className="ResultSection">
 {/* Result Section */}
        <p>Result :</p>
        <div>
          <div>
            Characters With Space:{" "}
            <span id="characterCount">{CharacterCountWithSpace}</span>
          </div>
          <div>
            Characters Without Space:{" "}
            <span id="characterCount">{CharacterCountWithoutSpace}</span>
          </div>
          <div>
            Words: <span id="wordCount">{WordCount}</span>
          </div>
          <div>
            ReadTime: <span id="characterCount">{estimatedReaTime}</span>
          </div>
        </div>
        </div>
       
      </div>
    </div>
  );
};

export default WordsCounter;
