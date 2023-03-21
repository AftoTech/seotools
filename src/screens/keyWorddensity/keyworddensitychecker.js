import React, { useState } from "react";
import ReactWordcloud from "react-wordcloud";
import { BASE_URL } from "../../constant";
import "./keyworddensitychecker.css";

const KeywordDensityChecker = () => {
  const [KeywordDensityChecker, setKeywordDensityChecker] = useState();
  const Calculate = () => {
    var text = document.getElementById("inputField").value;
      const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: text.trim() }),
    };
    fetch(BASE_URL + '/keywordDensityChecker', requestOptions)
      .then((response) => response.json())
      .then((data) => {
        let value  = JSON.parse(data)
        setKeywordDensityChecker(value) 
      }).catch((err) => {
        console.log(err)
      });
  };

  const returnfequency = (val, find) => {
    console.log(val)
     return val?.filter(item => item === find)?.length
   }

  const renderTable = (phrases) => {
    return (
      <table>
        <tr>
          <th>Phrases</th>          
          <th>frequency</th>
        </tr>
        { phrases.map((val) => {
          return (
            <tr >
              <td>{val}</td>
              <td>{returnfequency(phrases, val)}</td>
            </tr>
          )
        })}
      </table>
    );
  };
 const words = [
  {
    text: 'told',
    value: 64,
  },
  {
    text: 'mistake',
    value: 11,
  },
  {
    text: 'thought',
    value: 16,
  },
  {
    text: 'bad',
    value: 17,
   },
  
 ]
  return (
    <div className="container">
      <div>
        <p>KeywordDensityChecker :</p>
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
        {
          KeywordDensityChecker && (
            <>
             <h2>Top Phrases</h2>
              {renderTable(KeywordDensityChecker?.topKeywords)}
              <h2>One Phrases</h2>
              {renderTable(KeywordDensityChecker?.onePhrases)}
              <h2>Two Phrases</h2>
              {renderTable(KeywordDensityChecker?.twoPhrases)}
               <h2>Three Phrases</h2>
      {renderTable(KeywordDensityChecker?.threePhrases)}
            </>
          )
        }
       
      </div>
       <div style={{width: 300 ,height: 300, margin: 10}}>
        <ReactWordcloud words={words} />
        </div>
    </div>
  );
};

export default KeywordDensityChecker;
