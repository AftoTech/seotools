
import React from 'react';
import { Outlet, Link } from "react-router-dom";
import Card2 from '../components/card2';
import { HiHashtag } from "react-icons/hi";
import { TbTagOff } from "react-icons/tb";
import { disciption } from '../constant';
const MetaTagTools =() =>{
    return (
          <div>
        <div class="header">
       <div class="headerlogo">
          <p class="HeaderTitle">MetaTag Tools</p>
        </div>
      </div>
      <div class="container1">
        <section class="box2">
            <Card2 discription={disciption.MetaTagExtractor} title="MetaTag Extractor" navigateTo="/MetaTagExtractor"  Icon={<TbTagOff className="Icons" />}/>
            <Card2 discription={disciption.MetaTagGenrator} title="MetaTag Generator" navigateTo="/MetaTagGenerator" Icon={<HiHashtag className="Icons" />} />
        </section>
      </div>
      </div>
  )
}
 
export default MetaTagTools;