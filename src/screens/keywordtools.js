
import React from 'react';
import { Outlet, Link } from "react-router-dom";
const KeyWordTools =() =>{
    return (
        <div>
            <h1>KeyWordTools</h1>
       <nav>
        <ul>
          <li>
            <Link to="/KeywordExtractor">KeywordExtractor</Link>
            </li>
            <li>
            <Link to="/KeywordDensity">KeywordDensity</Link>
            </li>
             <li>
            <Link to="/KeywordCompetitorAnalsyis">KeywordCompetitorAnalsyis</Link>
            </li>
        </ul>
      </nav>
      </div>
  )
}
 
export default KeyWordTools;