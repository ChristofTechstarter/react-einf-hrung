import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./PokemonDetail.css";

function PokemonDetail() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => res.json())
      .then((data) => setPokemon(data));
  }, [id]);

  if (!pokemon)
    return (
      <>
        <Navbar />
        <p>Lade...</p>
        <Footer />
      </>
    );

  return (
    <>
      <Navbar />
      <div id="PokemonDetail">
        <h1>{pokemon.name}</h1>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        <p>Lebenspunkte: {pokemon.stats[0].base_stat}</p>
        <p>Angriffskraft: {pokemon.stats[1].base_stat}</p>
        <p>Defensive: {pokemon.stats[2].base_stat}</p>
        <p>Spezialangriff: {pokemon.stats[3].base_stat}</p>
        <p>Spezial-Defensive: {pokemon.stats[4].base_stat}</p>
        <p>Geschwindigkeit: {pokemon.stats[5].base_stat}</p>
        <p>Fähigkeit 1: {pokemon.abilities[0].ability.name}</p>
        <p>Fähigkeit 2: {pokemon.abilities[1].ability.name}</p>
        <p>Größe: {pokemon.height}</p>
        <p>Gewicht: {pokemon.weight}</p>
        <p>Typ: {pokemon.types.map((t) => t.type.name).join(", ")}</p>
      </div>
      <Footer />
    </>
  );
}

export default PokemonDetail;
