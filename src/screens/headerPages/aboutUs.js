import React, { useState } from "react";
import ReactDOM from "react-dom";
import Tesseract from "tesseract.js";
import "./headerpages.css";

const AboutUs = () => {
  const [file, setFile] = useState();
  const [OutPutText, setOutPutText] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  const Extract = () => {
    console.log("recognizee");
    Tesseract.recognize(file).then((data) => {
      console.log("dat---->", data);
      setOutPutText(data?.data?.text);
    });
  };

  return (
    <div >
      <div class="header">
        <div class="headerlogo">
          <p class="HeaderTitle">AboutUs</p>
        </div>
      </div>

      <div style={{marginLeft:50, alignItems:'center', justifyContent:'center'}}>
      <main>
		<h2>Our Mission</h2>
		<p>At [Company Name], our mission is to [brief description of the company's mission and values].</p>
		
		<h2>Our Approach</h2>
		<p>At [Company Name], we believe in [core values or principles] and we apply these values to everything we do. Our approach is [brief description of the company's approach to providing services].</p>
		<h2>Our Team</h2>
		<p>Our team is made up of [number of employees] individuals with diverse backgrounds and skillsets. We believe that our differences make us stronger and allow us to bring unique perspectives to our work. Each member of our team is passionate about [specific aspects of the company's mission].</p>

	</main>
      </div>
    </div>
  );
};

export default AboutUs;
