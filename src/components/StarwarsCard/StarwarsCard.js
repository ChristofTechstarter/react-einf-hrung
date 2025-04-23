import React from "react";
import "./StarwarsCard.css";

function StarwarsCard(props) {
  return (
    <div className="starwars-container">
      <h2>{props.Name}</h2>
      <p>Geschlecht: {props.Geschlecht}</p>
      <p>Haarfarbe: {props.Haarfarbe}</p>
      <p>Größe: {props.Größe}cm</p>
      <p>Gewicht: {props.Gewicht}KG</p>
    </div>
  );
}

export default StarwarsCard;
