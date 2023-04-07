import React, { useState } from "react";
import { BASE_URL } from "../../constant";
import "./brokenlinkChecker.css";

const BrokenLinkChecker = () => {
  const [Brokenlinks, setBrokenlinks] = useState();
  const [loading, setLoading] = useState(false);
  const Calculate = () => {
    setLoading(true);
    var text = document.getElementById("inputField").value;
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: text.trim() }),
    };
    fetch(BASE_URL + "/brokenLinkChecker", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setLoading(false);
        setBrokenlinks(data);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };
  return (
    <div>
      {/* Header */}
      <div class="header">
        <div class="headerlogo">
          <p class="HeaderTitle">BrokenLinkChecker</p>
        </div>
      </div>
      <div className="inputSectionContainer">
        <div className="inputtitlecontainer">
          <p>Input :</p>
        </div>
        <textarea
          className="teatAreastyle"
          id="inputField"
          placeholder="Enter your Url Here..."
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
        <div>
          {loading ? (
            <>
              <p>loading...</p>
            </>
          ) : (
              <div>
                {
                  Brokenlinks && (
                     <table >
                <thead>
                    <tr>
                    <th>S.No</th>
                    <th>Url</th>
                    <th style={{textalign:'center'}}>isBroken</th>
                  </tr>
                </thead>
                <tbody>
                  
                     {Brokenlinks?.map((item) => {
                return (
                  <tr>
                    <td>{Brokenlinks?.indexOf(item) + 1}</td>
                    <td>{item.link}</td>
                    <td>{item.isBroken.toString()}</td>
                  </tr>
                );
              })} 
                </tbody>
              </table>
                  )
                }
                 
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BrokenLinkChecker;
