import React, { useState } from "react";    
import { BASE_URL } from "../../constant";
import "./keywordExtractor.css";



const KeywordExtractor = () => {
  const [KeywordExtractor, setKeywordExtractor] = useState()
  const Calculate = () => {
     var text = document.getElementById("inputField").value;
      const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: text.trim() }),
    };
    fetch(BASE_URL + '/keywordExtractor', requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setKeywordExtractor(data) 
      }).catch((err) => {
        console.log(err)
      });
  }
  return (
    <div className="container">
      <div>
        <p>KeywordExtractor :</p>
              <textarea
                  className="KeywordArea"
          id="inputField"
          placeholder="Enter your Text here..."
        ></textarea>
      </div>
      <div className="calculatebutton">
        <button onClick={Calculate}>Extract</button>
      </div>
     <div>
        <p>Result :</p>
        <p>{KeywordExtractor}</p>
      </div>
    
    </div>
  );
};

export default KeywordExtractor;
