
import React from 'react';
import { Outlet, Link } from "react-router-dom";
import Card2 from '../components/card2';
import { HiHashtag } from "react-icons/hi";
import { TbTagOff } from "react-icons/tb";
const MetaTagTools =() =>{
    return (
          <div>
        <div class="header">
        <p>MetaTagTools</p>
      </div>
      <div class="container1">
        <section class="box2">
            <Card2 title="MetaTag Extractor" navigateTo="/MetaTagExtractor"  Icon={<TbTagOff className="Icons" />}/>
            <Card2 title="MetaTag Generator" navigateTo="/MetaTagGenerator" Icon={<HiHashtag className="Icons" />} />
        </section>
      </div>
      </div>
  )
}
 
export default MetaTagTools;