
import React from 'react';
 import { Outlet, Link } from "react-router-dom";
const HomePage =() =>{
    return (
        <div>
            <p>To refereence</p>
               <nav>
        <ul>
          <li>
            <Link to="/TextEditorTools">TextEditorTools</Link>
            </li>
             <li>
            <Link to="/MetaTagTools">MetaTagTools</Link>
            </li>
             <li>
            <Link to="/KeywordTools">KeywordTools</Link>
            </li>
              <li>
            <Link to="/BacklinkTools">BacklinkTools</Link>
            </li>
            
        </ul>
      </nav>
         </div>
  )
}
 
export default HomePage;