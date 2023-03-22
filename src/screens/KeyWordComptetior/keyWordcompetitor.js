import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { BASE_URL } from "../../constant";
import "./keyWordcompetitor.css";


const KeywordCompetitor = () => {
  const [comptetiorLinks, setcomptetiorLinks] = useState()
  const Calculate = () => {
   var text = document.getElementById("inputField").value;
      const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: text.trim() }),
    };
    fetch(BASE_URL + '/KeywordCompetitorAnalysis', requestOptions)
      .then((response) => response.json())
      .then((data) => {
          let value = JSON.parse(data)
         setcomptetiorLinks(value)
      }).catch((err) => {
        console.log(err)
      });
  }
  return (
    <div className="container">
      <div>
        <p>Keyword Competitor Analysis :</p>
              <textarea
                  className="KeyWordInput"
          id="inputField"
          placeholder="Enter your KeyWord here..."
        ></textarea>
      </div>
      <div className="calculatebutton">
        <button onClick={Calculate}>Generate</button>
      </div>
     <div>
              <p>Result :</p>
              {
                  comptetiorLinks?.results.map(item => {
                      return (
                      <p>{item?.url}</p>
                      )
                  })
              }
        
      </div>
    
    </div>
  );
};

export default KeywordCompetitor;
