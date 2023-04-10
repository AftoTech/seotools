import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "./metataggenerator.css";
const MetaTagGenerator = () => {
  const [Result, setResult] = useState("");
  const [Copied ,setCopied] = useState('')
  function create() {
    let form = "";
    var Titletext = document.getElementById("Title").value;
    var Authortext = document.getElementById("Author").value;
    var Discription = document.getElementById("Discription").value;
    var Keyword = document.getElementById("Keyword").value;
    console.log("tes--->", Titletext, Authortext, Discription, Keyword);

    if (Titletext != "") {
      form += '<META NAME="Title" CONTENT="' + Titletext + '">\n';
    }
    if (Authortext != "") {
      form += '<META NAME="Author" CONTENT="' + Authortext + '">\n';
    }
    if (Discription != "") {
      form += '<META NAME="Description" CONTENT="' + Discription + '">\n';
    }
    if (Keyword != "") {
      form += '<META NAME="Keywords" CONTENT="' + Keyword + '">\n';
    }
    setResult(form);
  }

  return (
    <div>
      {/* Header */}
      <div class="header">
        <div class="headerlogo">
          <p class="HeaderTitle">MetaTagGenerator</p>
        </div>
      </div>
      <div className="inputSectionContainer">
        <div className="inputtitlecontainer">
          <p>Input :</p>
          <form>
            <div>
              <center>
                <table class="normal" BORDER="0" CELLPADDING="1">
                  <tr>
                    <td>Title:</td>
                    <td>
                      <input id="Title" TYPE="text" NAME="input1" SIZE="40" />
                    </td>
                  </tr>
                  <tr>
                    <td>Author:</td>
                    <td>
                      <input id="Author" TYPE="text" NAME="input2" SIZE="40" />
                    </td>
                  </tr>
                  <tr>
                    <td>Discription:</td>
                    <td>
                      <input
                        id="Discription"
                        TYPE="text"
                        NAME="input3"
                        SIZE="40"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Keyword:</td>
                    <td>
                      <input id="Keyword" TYPE="text" NAME="input4" SIZE="40" />
                    </td>
                  </tr>
                </table>
              </center>
            </div>
          </form>
        </div>
      </div>
      <div className="calculatebutton">
        <button className="buttonstyle" onClick={create}>
          Extract
        </button>
      </div>
      <div className="ResultSection">
        <p>Result :</p>
        <div
          className="teatAreastyle"
          style={{ height: 100, marginBottom: 100 }}
        >
          <div>
            {
              Result && (
                 <button
              onClick={async () => {
                try {
                  await navigator.clipboard.writeText(Result);
                  alert('copied')
                } catch (err) {
  setCopied('')
                }
              }}
            >
              Copy
            </button>
              )
           }
          </div>
          
          <div>{Result}</div>
        </div>
      </div>
    </div>
  );
};

export default MetaTagGenerator;
