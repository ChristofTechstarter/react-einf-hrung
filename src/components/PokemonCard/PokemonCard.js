import React from "react";
import "./PokemonCard.css";
import { useNavigate } from "react-router-dom";

function PokemonCard(props) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/pokemon/${props.id}`);
  };

  return (
    <div className="container" onClick={handleClick}>
      <img src={props.image} alt="Pokemon" width={"200px"}></img>
      <h2>{props.Name}</h2>
      <p>Gewicht: {props.Gewicht}</p>
      <p>Größe: {props.Größe}</p>
      <p>Typ: {props.Typ}</p>
    </div>
  );
}

export default PokemonCard;
