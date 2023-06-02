import { useState, useEffect } from "react";

const HomePage = () => {
  let [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/charmander")
      .then((response) => response.json())
      .then((data) => setPokemon(data));
  }, []);

  return (
    <>
      {pokemon && (
        <div>
          <h1>{pokemon.name}</h1>
          <img src={pokemon.sprites.front_default} />
        </div>
      )}
    </>
  );
};

export default HomePage;
