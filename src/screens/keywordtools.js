
import React from 'react';
import { Outlet, Link } from "react-router-dom";
import Card2 from '../components/card2';
import { GiThreeKeys,GiWarlockEye } from "react-icons/gi";
import { FaKeycdn } from "react-icons/fa";
import { disciption } from '../constant';
const KeyWordTools =() =>{
    return (
    <div>
        <div class="header">
          <div class="headerlogo">
          <p class="HeaderTitle">KeyWord Tools</p>
        </div>
      </div>
      <div class="container1">
        <section class="box2">
            <Card2 discription={disciption.KeywordExtractor} title="Keyword Extractor" navigateTo="/KeywordExtractor"  Icon={<FaKeycdn className="Icons" />}/>
            <Card2  discription={disciption.KeywordDensitychecker} title="Keyword Density Extractor" navigateTo="/KeywordDensity" Icon={<GiThreeKeys className="Icons" />} />
            <Card2 discription={disciption.KeyWordCompetitorAnalysis}  title="Keyword Competitor Analsyis" navigateTo="/KeywordCompetitorAnalsyis" Icon={<GiWarlockEye className="Icons" />} />
        </section>
      </div>
      </div>
  )
}
 
export default KeyWordTools;