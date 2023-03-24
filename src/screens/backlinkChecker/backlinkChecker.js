import React, { useState } from "react";    
import { BASE_URL } from "../../constant";
import "./backlinkChecker.css";



const BackLinkChecker = () => {
  const [Backlinks, setBacklinks] = useState()
  const Calculate = () => {
     var text = document.getElementById("inputField").value;
      const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: text.trim() }),
    };
    fetch(BASE_URL + '/BacklinkChecker', requestOptions)
      .then((response) => response.json())
        .then((data) => {
          console.log(data)
        // setKeywordExtractor(data) 
      }).catch((err) => {
        console.log(err)
      });
  }
  return (
    <div className="container">
      <div>
        <p>BackLinkChecker :</p>
              <textarea
                  className="KeywordArea"
          id="inputField"
          placeholder="Enter your url here..."
        ></textarea>
      </div>
      <div className="calculatebutton">
        <button onClick={Calculate}>Extract</button>
      </div>
     <div>
        <p>Result :</p>
        <p>{Backlinks}</p>
      </div>
    
    </div>
  );
};

export default BackLinkChecker;
