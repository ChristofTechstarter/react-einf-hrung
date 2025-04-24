import React from "react";
import "./PokemonCard.css";
import { Link } from "react-router-dom";

function PokemonCard(props) {
  return (
    <Link to={`/pokemon/${props.id}`} style={{ textDecoration: "none" }}>
      <div className="container">
        <img src={props.image} alt="Pokemon" width={"200px"}></img>
        <h2>{props.Name}</h2>
        <p>Gewicht: {props.Gewicht}</p>
        <p>Größe: {props.Größe}</p>
        <p>Typ: {props.Typ}</p>
      </div>
    </Link>
  );
}

export default PokemonCard;
