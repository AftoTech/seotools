import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "./metataggenerator.css";
const MetaTagGenerator = () => {
  const [Result, setResult] = useState("");
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
      <h1>MetaTagGenerator</h1>
      <div align="center">
        <center>
          <table
            class="normal"
            WIDTH="600"
            BORDER="0"
            CELLSPACING="0"
            CELLPADDING="0"
          >
            <tr>
              <td>
                <center>
                  <font face="verdana" size="4">
                    Meta tag generator
                  </font>
                </center>

                <form>
                  <div align="center">
                    <center>
                      <table class="normal" BORDER="0" CELLPADDING="2">
                        <tr>
                          <td>Title:</td>
                          <td>
                            <input
                              id="Title"
                              TYPE="text"
                              NAME="input1"
                              SIZE="40"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>Author:</td>
                          <td>
                            <input
                              id="Author"
                              TYPE="text"
                              NAME="input2"
                              SIZE="40"
                            />
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
                            <input
                              id="Keyword"
                              TYPE="text"
                              NAME="input4"
                              SIZE="40"
                            />
                          </td>
                        </tr>
                      </table>
                    </center>
                  </div>
                </form>
                <div className="calculatebutton">
                  <button onClick={create}>Generate</button>
                </div>
              </td>
            </tr>
          </table>
        </center>
        <div>
          <p>Result :</p>
          <div>{Result}</div>
        </div>  
      </div>
    </div>
  );
};

export default MetaTagGenerator;
