import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "./md5.css";
var CryptoJS = require("crypto-js");
const Md5Generator = () => {
  const [Md5code, setMd5code] = useState();
  const [Loading,setLoading] = useState(false)
  const Calculate = () => {
    setLoading(true)
    var text = document.getElementById("inputField").value;
    var hash = CryptoJS.MD5(text).toString();
    setLoading(false)
    setMd5code(hash);
  };
  return (
    <div>
      <div>
        {/* Header */}
        <div class="header">
          <div class="headerlogo">
            <p class="HeaderTitle">Md5 Generator</p>
          </div>
        </div>
      </div>
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
      {/* butto section */}
      <div className="calculatebutton">
        <button className="buttonstyle" onClick={Calculate}>
          Calculate
        </button>
      </div>
      <div className="ResultSection">
        {/* Result Section */}
        <div>
          <p>Result :</p>
          <table className="tabelcontainer">
            <thead>
              <tr>
                <th>S.no</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td >MD5 Code</td>
                <td style={{ width: 300 }}>
                  {
                    Loading ? 
                      <p>Loading...</p>
                      :
                      <p>{Md5code}</p>
                  }
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Md5Generator;
