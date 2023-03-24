
import React from 'react';
import { Outlet, Link } from "react-router-dom";
const BackLinkTools =() =>{
    return (
        <div>
            <h1>BackLinkTools</h1>
       <nav>
        <ul>
          <li>
            <Link to="/BackLinkChecker">BackLinkChecker</Link>
            </li>
              <li>
            <Link to="/BrokenLinkChecker">BrokenLinkChecker</Link>
            </li>
        </ul>
      </nav>
      </div>
  )
}
 
export default BackLinkTools;