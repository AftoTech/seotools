import React, { useState } from "react";    
import "./keywordExtractor.css";



const KeywordExtractor = () => {
  const [KeywordExtractor, setKeywordExtractor] = useState()
  const Calculate = () => {
      
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
