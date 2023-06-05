import { useState, useEffect } from "react";

const HomePage = () => {
  let [pokemon, setPokemon] = useState(null);
  // let [pokemonMoves, setPokemonMoves] = useState(pokemon.moves);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/raikou")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.sprites);
        setPokemon(data);
      });
  }, []);

  return (
    <div className="">
      {pokemon && (
        <div>
          <section className="flex flex-col text-center justify-center px-4 border border-red-200">
            <h1 className="font-bold text-3xl">{pokemon.name}</h1>
            <img className="h-40 w-40 flex mx-auto justify-center" src={pokemon.sprites.front_default} />
            {pokemon.types.map((type, index) => (
              <div>
                <h2>{type.type.name}</h2>
                {/* <img src={type.type.url} /> */}
              </div>
            ))}
          </section>
          <div className="flex justify-center pt-3">
            <h1 className="font-bold">Move List</h1>
          </div>
          <section className="flex flex-wrap justify-center text-center pt-3">
            {pokemon.moves.map((move, index) => (
              <h2 className="w-1/3">{move.move.name}</h2>
            ))}
          </section>
        </div>
      )}
    </div>
  );
};

export default HomePage;
