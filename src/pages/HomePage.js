import { useState, useEffect } from "react";

const HomePage = () => {
  let [pokemon, setPokemon] = useState(null);
  let [input, setInput] = useState("");

  const searchButtonHandler = async () => {
    await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.sprites.other["official-artwork"].front_default);
        setPokemon(data);
      });
  };

  return (
    <>
      <div>
        <input onChange={(event) => setInput(event.target.value)} className="bg-red-200" />
        <button onClick={searchButtonHandler}>Search</button>
      </div>
      {pokemon && (
        <div>
          <section className="flex flex-col text-center justify-center px-4 border border-red-200">
            <h1 className="font-bold text-3xl">{pokemon.name}</h1>
            <img className="h-40 w-40 flex mx-auto justify-center" src={pokemon.sprites.other["official-artwork"].front_default} />
            <h2 className="font-bold">Type</h2>
            {pokemon.types.map((type, index) => (
              <h2>{type.type.name}</h2>
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
          <section className="flex flex-wrap flex-col items-center pt-3">
            <h1 className="flex text-center font-bold text-2xl">Stats</h1>
            {pokemon.stats.map((stat) => (
              <div className="flex flex-row justify-between w-1/2">
                <h2 className="font-bold">{stat.stat.name}</h2>
                <h2>{stat.base_stat}</h2>
              </div>
            ))}
          </section>
        </div>
      )}
    </>
  );
};

export default HomePage;
