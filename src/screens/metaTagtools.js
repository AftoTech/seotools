
import React from 'react';
import { Outlet, Link } from "react-router-dom";
const MetaTagTools =() =>{
    return (
        <div>
            <h1>MetaTagTools</h1>
       <nav>
        <ul>
          <li>
            <Link to="/MetaTagExtractor">MetaTagExtractor</Link>
            </li>
             <li>
            <Link to="/MetaTagGenerator">MetaTagGenerator</Link>
            </li>
            
        </ul>
      </nav>
      </div>
  )
}
 
export default MetaTagTools;