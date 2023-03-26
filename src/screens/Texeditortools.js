
import React from 'react';
import { Outlet, Link } from "react-router-dom";
import Card2 from '../components/card2';
import { TbFileDigit } from 'react-icons/tb';
import { BsQrCode ,BsImages} from "react-icons/bs";
const TextEditorTools =() =>{
    return (
        <div>
        <div class="header">
        <p>TextEditorTools</p>
      </div>
      <div class="container1">
        <section class="box2">
            <Card2 title="Word Counter" navigateTo="/WordsCounter"  Icon={<TbFileDigit className="Icons" />}/>
            <Card2 title="Md5 Generator" navigateTo="/Md5Generator" Icon={<BsQrCode className="Icons" />} />
            <Card2 title="ImageToText" navigateTo="/ImageToText"  Icon={<BsImages className="Icons" />}/>
        </section>
      </div>
      </div>
  )
}
 
export default TextEditorTools;