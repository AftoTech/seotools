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
        console.log(value)
         setcomptetiorLinks(value)
      }).catch((err) => {
        console.log(err)
      });
  }
  return (
    <div >
      {/* Header */}
      <div class="header">
        <div class="headerlogo">
          <p class="HeaderTitle">Keyword Competitor Analysis</p>
        </div>
      </div>
      <div>
         <div>
        {/* InputSection */}

        <div className="inputSectionContainer">
          <div className="inputtitlecontainer">
            <p>Input :</p>
          </div>
         <textarea
              className="teatAreastyle"
          id="inputField"
          placeholder="Enter your KeyWord here..."
        ></textarea>
          </div>
          
      </div>
      </div>
      {/* butto section */}
      <div className="calculatebutton">
        <button className="buttonstyle" onClick={Calculate}>
          Extract
        </button>
      </div>
     <div className="ResultSection">
        <p>Result :</p>
         <div>
            {
              comptetiorLinks?.results?.length > 0 && (
              <table >
                <thead>
                  <tr>
                    <th>S.no</th>
                    <th style={{textalign:'center'}}>Word</th>
                  </tr>
                </thead>
                <tbody>
                  
                        {
                            comptetiorLinks?.results?.map((item) => {
                      return (
                         <tr>
                          <td>{comptetiorLinks?.results.indexOf(item) + 1} </td>
                          <td>{item?.url}</td>
                         </tr>
                      )
                    })
                      
                  }
                </tbody>
              </table>
              )
            }
          </div>
              {/* {
                  comptetiorLinks?.results.map(item => {
                      return (
                      <p>{item?.url}</p>
                      )
                  })
              } */}
        
      </div>
    
    </div>
  );
};

export default KeywordCompetitor;
