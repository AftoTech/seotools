import React from "react";
import { Outlet, Link } from "react-router-dom";
import Card from "../components/card";
import "./homepage.css";
import { TbTextSize } from 'react-icons/tb';
import { AiTwotoneTags } from "react-icons/ai";
import { FaKey, FaExternalLinkSquareAlt } from "react-icons/fa";
import { IoMdAnalytics } from "react-icons/io";
const HomePage = () => {

  
  return (
    <div>
      <div class="header">
        <div class="headerlogo">
          <IoMdAnalytics  className="Icons2" />
          <p style={{marginLeft:10}} class="HeaderTitle">Genitive</p>
        </div>
        {/* <div class="headerLinkStyle">
          <div  class="Linkbutton">
            <a href="/AboutUs">
              About Us
            </a>
          </div>
          <div  class="Linkbutton">
            <a href="https://www.w3schools.com">
              Contact Us
            </a>
          </div>
          
        </div> */}
      </div>
      <div class="container1">
        <section class="box2">
          <Card title="TextEditor" navigateTo="/TextEditorTools"  Icon={<TbTextSize className="Icons" />} />
          <Card title="MetaTagTools" navigateTo="/MetaTagTools" Icon={<AiTwotoneTags className="Icons" />}  />
          <Card title="KeywordTools"  navigateTo="/KeywordTools" Icon={<FaKey className="Icons" />} />
           <Card title="BacklinkTools" navigateTo="/BacklinkTools"  Icon={<FaExternalLinkSquareAlt className="Icons" />}/>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
