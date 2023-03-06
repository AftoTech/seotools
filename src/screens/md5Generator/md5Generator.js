import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "./md5.css";
var CryptoJS = require("crypto-js");
const Md5Generator = () => {
  const [Md5code, setMd5code] = useState()
  const Calculate = () => {
         var text = document.getElementById("inputField").value;
    var hash = CryptoJS.MD5(text).toString()
    console.log("data----->", hash)
    setMd5code(hash)
  }
  return (
    <div className="container">
      <div>
        <p>Md5Generator :</p>
              <textarea
                  className="Md5area"
          id="inputField"
          placeholder="Enter your Password here..."
        ></textarea>
      </div>
      <div className="calculatebutton">
        <button onClick={Calculate}>Generate</button>
      </div>
     <div>
        <p>Result :</p>
        <p>{Md5code}</p>
      </div>
    
    </div>
  );
};

export default Md5Generator;
