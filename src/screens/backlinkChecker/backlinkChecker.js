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
        setBacklinks(data) 
      }).catch((err) => {
        console.log(err)
      });
  }
  return (
    <div >
        {/* Header */}
      <div class="header">
        <div class="headerlogo">
          <p class="HeaderTitle">BackLinkChecker</p>
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
            placeholder="Enter your Url here..."
          ></textarea>
        </div>
     {/* butto section */}
      <div className="calculatebutton">
        <button className="buttonstyle" onClick={Calculate}>
          Extract
        </button>
      </div>
     <div className="ResultSection">
        <p>Result :</p>
        <p>{Backlinks}</p>
      </div>
    
    </div>
  );
};

export default BackLinkChecker;
