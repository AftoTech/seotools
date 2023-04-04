import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { BASE_URL } from "../../constant";

import "./metatagextcator.css";
const MetaTagExtractor = () => {
  const [metaextracted, setmetaextracted] = useState();
  const [Loading, setLoading] = useState(false);

  const Extract = async () => {
    setLoading(true);
    var url = document.getElementById("inputField").value;
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: url }),
    };
    fetch(BASE_URL + "/metatagextract", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setmetaextracted(data.meta);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };
  return (
    <div>
      <div>
        <div>
          {/* Header */}
          <div class="header">
            <div class="headerlogo">
              <p class="HeaderTitle">MetaTagExtractor</p>
            </div>
          </div>
        </div>
      </div>
      <div className="inputSectionContainer">
        <div className="inputtitlecontainer">
          <p>Input :</p>
        </div>
        <textarea
          className="Metatagarea"
          id="inputField"
          placeholder="Enter your Url Here"
        ></textarea>
      </div>
      <div className="calculatebutton">
        <div className="extractbutton">
          <button onClick={Extract}>Generate</button>
        </div>
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
                <td>MD5 Code</td>
                <td>
                  {" "}
                  <p>
                    {Loading ? (
                      <p>Loading....</p>
                    ) : (
                      <p>{JSON.stringify(metaextracted)}</p>
                    )}
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MetaTagExtractor;
