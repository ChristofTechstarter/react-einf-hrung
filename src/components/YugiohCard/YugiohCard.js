import React from "react";
import { Link } from "react-router-dom";
import "./YugiohCard.css";

function YugiohCard(props) {
  return (
    <Link to={`/yugioh/${props.karte.id}`} className="yugioh-card">
      <img src={props.karte.card_images[0].image_url} alt={props.karte.name} />
    </Link>
  );
}

export default YugiohCard;
