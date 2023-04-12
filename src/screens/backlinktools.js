
import React from 'react';
import { Outlet, Link } from "react-router-dom";
import Card2 from '../components/card2';
import { FaLink} from "react-icons/fa";
import { BiUnlink } from "react-icons/bi";
import { disciption } from '../constant';
const BackLinkTools =() =>{
    return (
        <div>
        <div class="header">
       <div class="headerlogo">
          <p class="HeaderTitle">BackLink Tools</p>
        </div>
      </div>
      <div class="container1">
        <section class="box2">
            <Card2 discription={disciption.BackLinkChecker} title="BackLink Checker" navigateTo="/BackLinkChecker"  Icon={<FaLink className="Icons" />}/>
            <Card2 discription={disciption.BrokenLinkChecker} title="BrokenLink Checker" navigateTo="/BrokenLinkChecker" Icon={<BiUnlink className="Icons" />} />
        </section>
      </div>
      </div>
  )
}
 
export default BackLinkTools;