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
    <div class="ui container">
      <h1 class="ui header">Image to Text</h1>
      <div class="desc">
        Extract all the text from a selected image using tesseract OCR engine.
      </div>

      <div class="ui grid stackable">
        <div class="row">
          <div class="eight wide column">
            <div class="ui card">
              <div class="content">
                <h2 class="header">Input</h2>
              </div>
              <div class="content">
                <input type="file" onChange={handleChange} />
                <img src={file} />
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
