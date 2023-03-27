import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Card2 = (props) => {
  const { title, Icon , navigateTo} = props;
  const navigate = useNavigate();
  const onPress = () => {
       navigate(navigateTo);
  }
  return (
    <div class="card2">
      <div onClick={onPress} class="Cardcontainer">
        <div class="iconcontainer">
          <div className="Iconstyle">{Icon}</div>
        </div>
        <div>
          <h4 class="cardText">{title}</h4>
          <p class="cardText">this is wheer discription lies</p>
        </div>
      </div>
    </div>
  );
};

export default Card2;
