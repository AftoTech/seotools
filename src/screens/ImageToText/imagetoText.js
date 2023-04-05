import React, { useState } from "react";
import ReactDOM from "react-dom";
import Tesseract from "tesseract.js";
import './imgeTotext.css'

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
     
        <div className="container1">
          <div >
             <div >
                <p>Input :</p>
              </div>
            
              <div class="cardstyle">
                <div className="buttoncontainer" >
                   <input  type="file"  onChange={handleChange} />
               </div>
                <img style={{width:150, height:150,padding:10 }} src={file} />
              </div>
            
          </div>
          <div >
            <div >
              <p>Output :</p>
              <div class="cardstyle">
                <div className="buttoncontainer">
                   <button className="buttonstyle1"  onClick={Extract}>
                 Get Text on Image
                </button>
               </div>
                <div style={{padding:25 , width:200, height:200 , borderWidth:10,  justifyContent:'center', alignItems:'center', display:'flex' }}>
                  <p>{OutPutText}</p>
                </div>
               </div>
                 
            </div>
          </div>
        </div>
      </div>
  );
};

export default ImageToText;
