import React, { useEffect, useState } from "react";
import PokemonCard from "../PokemonCard/PokemonCard";
import "./PokemonList.css";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

function PokemonList() {
  const [pokemons, setPokemons] = useState([]);
  const [offset, setOffset] = useState(0);
  const limit = 20;

  const fetchPokemons = (currentOffset) => {
    fetch(
      `https://pokeapi.co/api/v2/pokemon?offset=${currentOffset}&limit=${limit}`
    )
      .then((res) => res.json())
      .then((data) => {
        const urls = data.results.map((pokemon) => pokemon.url);

        return Promise.all(
          urls.map((url) => fetch(url).then((res) => res.json()))
        );
      })
      .then((pokemonData) => {
        setPokemons((prev) => [...prev, ...pokemonData]);
      })
      .catch((err) => {
        console.error("Fehler beim Laden der Pokémon:", err);
      });
  };

  useEffect(() => {
    fetchPokemons(offset);
  }, [offset]);

  const handleLoadMore = () => {
    setOffset((prevOffset) => prevOffset + limit);
  };

  return (
    <>
      <div className="containerList">
        {pokemons.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            id={pokemon.id}
            image={pokemon.sprites.front_default}
            Name={pokemon.name}
            Gewicht={pokemon.weight}
            Größe={pokemon.height}
            Typ={pokemon.types[0].type.name}
          />
        ))}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          margin: "2rem",
        }}
      >
        <Stack direction="row" spacing={2}>
          <Button
            variant="outlined"
            onClick={() => handleLoadMore()}
            sx={{
              color: "#c9302d",
              borderColor: "#c9302d",
              "&:hover": { color: "#ff3c38", borderColor: "#ff3c38" },
            }}
          >
            Mehr Laden
          </Button>
        </Stack>
      </div>
    </>
  );
}

export default PokemonList;
