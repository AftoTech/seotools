import React, { useState } from "react";
import ReactDOM from "react-dom";
import Tesseract from "tesseract.js";

const ImageToText = () => {
    const [file, setFile] = useState();
    const [OutPutText , setOutPutText] = useState()
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  
    };
    const Extract = () => {
        console.log("recognizee")
        Tesseract.recognize(file).then((data) => {
            console.log("dat---->", data)
            setOutPutText(data?.data?.text)
    })
  }

  return (
    <div >
         <div class="header">
          <div class="headerlogo">
            <p class="HeaderTitle">Image To Text</p>
          </div>
        </div>
     
      <div >
        <div class="row">
          <div >
             <div >
                <h1>Input</h1>
              </div>
            <div class="ui card">
              <div >
                <div>
                   <input type="file" onChange={handleChange} />
               </div>
                <img style={{width:"60%", height:100}} src={file} />
              </div>
            </div>
          </div>
          <div class="eight wide column">
            <div class="ui card">
              <div class="content">
                <button onClick={Extract}>
                 Get Text on Image
                </button>
                <h2 class="header">Output</h2>
                          </div>
                 <p>{OutPutText}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageToText;
