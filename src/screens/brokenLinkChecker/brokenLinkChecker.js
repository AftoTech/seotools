import React, { useState } from "react";    
import { BASE_URL } from "../../constant";
import "./brokenlinkChecker.css";



const BrokenLinkChecker = () => {
  const [Brokenlinks, setBrokenlinks] = useState()
  const Calculate = () => {
     var text = document.getElementById("inputField").value;
      const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: text.trim() }),
    };
    fetch(BASE_URL + '/brokenLinkChecker', requestOptions)
      .then((response) => response.json())
        .then((data) => {
          console.log(data)
        setBrokenlinks(data) 
      }).catch((err) => {
        console.log(err)
      });
  }
  return (
    <div className="container">
      <div>
        <p>BrokenLinkChecker :</p>
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
              {
                  Brokenlinks?.map((item) => {
                       return (
            <tr >
              <td>{item.link}</td>
              <td>{item.isBroken.toString()}</td>
            </tr>
          )
                  })
        }
      </div>
    
    </div>
  );
};

export default BrokenLinkChecker;
