import React from "react";
import { Outlet, Link } from "react-router-dom";
import Card from "../components/card";
import "./homepage.css";
import { TbTextSize } from 'react-icons/tb';
import { AiTwotoneTags } from "react-icons/ai";
import { FaKey, FaExternalLinkSquareAlt } from "react-icons/fa";
const HomePage = () => {

  
  return (
    <div>
      <div class="header">
        <p>SEO Tools</p>
      </div>
      <div class="container1">
        <section class="box2">
          <Card title="TextEditor" navigateTo="/TextEditorTools" Icon={<TbTextSize className="Icons" />} />
          <Card title="MetaTagTools" navigateTo="/MetaTagTools" Icon={<AiTwotoneTags className="Icons" />}  />
          <Card title="KeywordTools"  navigateTo="/KeywordTools" Icon={<FaKey className="Icons" />} />
           <Card title="BacklinkTools" navigateTo="/BacklinkTools"  Icon={<FaExternalLinkSquareAlt className="Icons" />}/>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
