
import React from 'react';
import { Outlet, Link } from "react-router-dom";
import Card2 from '../components/card2';
import { TbFileDigit } from 'react-icons/tb';
import { BsQrCode ,BsImages} from "react-icons/bs";
import { disciption } from '../constant';
const TextEditorTools =() =>{
    return (
        <div>
        <div class="header">
        <div class="headerlogo">
          <p class="HeaderTitle">TextEditor Tools</p>
        </div>
      </div>
      <div class="container1">
        <section class="box2">
            <Card2 discription={disciption.WordCounter} title="Word Counter" navigateTo="/WordsCounter"  Icon={<TbFileDigit className="Icons" />}/>
            <Card2 discription={disciption.MD5} title="Md5 Generator" navigateTo="/Md5Generator" Icon={<BsQrCode className="Icons" />} />
            <Card2  discription={disciption.ImageToText} title="ImageToText" navigateTo="/ImageToText"  Icon={<BsImages className="Icons" />}/>
        </section>
      </div>
      </div>
  )
}
 
export default TextEditorTools;