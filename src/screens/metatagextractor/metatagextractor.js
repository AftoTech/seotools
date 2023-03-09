
import React from 'react';
import { Outlet, Link } from "react-router-dom";
import './metatagextcator.css';
const MetaTagExtractor = () => {
    
    const Extract = async() => {
        var url = document.getElementById("inputField").value;
        console.log(url)
    //    const data = await getMetaData(url)
	// console.log(data)
        
    }
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
        <p></p>
      </div>
    
    </div>
  )
}
 
export default MetaTagExtractor;