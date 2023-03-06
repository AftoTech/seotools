
import React from 'react';
import { Outlet, Link } from "react-router-dom";
const TextEditorTools =() =>{
    return (
        <div>
            <h1>Text editor TextEditorTools</h1>
       <nav>
        <ul>
          <li>
            <Link to="/WordsCounter">WordsCounter</Link>
            </li>
             <li>
            <Link to="/Md5Generator">Md5Generator</Link>
          </li>
        </ul>
      </nav>
      </div>
  )
}
 
export default TextEditorTools;