import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Card = (props) => {
  const { title, Icon , navigateTo, discription} = props;
  const navigate = useNavigate();
  const onPress = () => {
       navigate(navigateTo);
  }
  return (
    <div class="card">
      <div onClick={onPress} class="Cardcontainer">
        <div class="iconcontainer">
          <div className="Iconstyle">{Icon}</div>
        </div>
        <div>
          <h4 class="cardText">{title}</h4>
          <p class="cardText">{discription}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
