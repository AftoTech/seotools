
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
        </ul>
      </nav>
         </div>
  )
}
 
export default HomePage;