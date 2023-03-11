import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { BASE_URL } from "../../constant";

import "./metatagextcator.css";
const MetaTagExtractor = () => {
  
  const [metaextracted, setmetaextracted] = useState();
  const [Loading ,setLoading] = useState(false)

  const Extract = async () => {
    setLoading(true)
    var url = document.getElementById("inputField").value;
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: url }),
    };
    fetch(BASE_URL + '/metatagextract', requestOptions)
      .then((response) => response.json())
      .then((data) => {
         setmetaextracted(data.meta);
        setLoading(false)
      }).catch((err) => {
        console.log(err)
          setLoading(false)
      });
  };
  return (
    <div className="container">
      <div>
        <p>MetaTagExtractor :</p>
        <textarea
          className="Metatagarea"
          id="inputField"
          placeholder="Enter your Url Here"
        ></textarea>
      </div>
      <div className="extractbutton">
        <button onClick={Extract}>Generate</button>
      </div>
      <div>
        <p>Result :</p>
        <p>{
          Loading ? 
         <p>Loading....</p>
            :
            <p>{JSON.stringify(metaextracted)}</p>
        }</p>
      </div>
    </div>
  );
};

export default MetaTagExtractor;
