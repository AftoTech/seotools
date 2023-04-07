import React, { useState } from "react";
import { BASE_URL } from "../../constant";
import "./keywordExtractor.css";



const KeywordExtractor = () => {
  const [KeywordExtractor, setKeywordExtractor] = useState([])
  const Calculate = () => {
    var text = document.getElementById("inputField").value;
    console.log(text)
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
  console.log(KeywordExtractor)
  return (
    <div >
      {/* Header */}
      <div class="header">
        <div class="headerlogo">
          <p class="HeaderTitle">KeywordExtractor</p>
        </div>
      </div>
      <div>
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
      </div>
      {/* butto section */}
      <div className="calculatebutton">
        <button className="buttonstyle" onClick={Calculate}>
          Extract
        </button>
      </div>
      <div>
        <div className="ResultSection">
          {/* Result Section */}
          <p>Result :</p>
          <div>
            {
              KeywordExtractor?.length > 0 && (
              <table >
                <thead>
                  <tr>
                    <th>S.no</th>
                    <th style={{textalign:'center'}}>Word</th>
                  </tr>
                </thead>
                <tbody>
                  
                        {
                            KeywordExtractor?.map((item) => {
                      return (
                         <tr>
                          <td>{KeywordExtractor.indexOf(item) + 1} </td>
                          <td>{item}</td>
                         </tr>
                      )
                    })
                      
                  }
                </tbody>
              </table>
              )
            }
          </div>
        </div>

      </div>

    </div>
  );
};

export default KeywordExtractor;
