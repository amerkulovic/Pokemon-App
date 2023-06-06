import { useState, useEffect } from "react";
import HomeMessage from "../components/HomeMessage";
import Nav from "../components/Nav";
import Sprite from "../components/Sprite";

const HomePage = () => {
  let [pokemon, setPokemon] = useState(null);
  let [input, setInput] = useState("");

  const searchButtonHandler = async () => {
    await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPokemon(data);
      });
  };

  return (
    <>
      <Nav changeHandler={(event) => setInput(event.target.value)} clickHandler={searchButtonHandler} />
      {!pokemon && <HomeMessage />}
      {pokemon && (
        <div className="flex">
          <section className="flex flex-col text-center justify-center px-4 w-2/5 border-2 border-blue-400 rounded-lg mx-2">
            <h1 className="font-bold text-3xl">{pokemon.name}</h1>
            <img className="h-80 w-80 flex mx-auto justify-center" src={pokemon.sprites.other["official-artwork"].front_default} />

            <section>
              <h2 className="font-bold">Type</h2>
              <div className="flex flex-row justify-center">
                {pokemon.types.map((type, index) => (
                  <h2 key={type.type.name} className="m-1">
                    {type.type.name}
                  </h2>
                ))}
              </div>
            </section>
           <Sprite image1={pokemon.sprites.front_default} image2={pokemon.sprites.back_default} />
          </section>
          {/* <section className="flex flex-wrap flex-col items-center pt-3 w-3/5 border-2 border-blue-400 rounded-lg mx-2">
            <h1 className="flex text-center font-bold text-2xl">Stats</h1>
            {pokemon.stats.map((stat) => (
              <div key={stat.stat.name} className="flex flex-row justify-between w-1/2">
                <h2 className="font-bold">{stat.stat.name}</h2>
                <h2>{stat.base_stat}</h2>
              </div>
            ))}
          </section> */}
          {/* <div className="flex justify-center pt-3">
            <h1 className="font-bold">Move List</h1>
          </div>
          <section className="flex flex-wrap justify-center text-center pt-3">
            {pokemon.moves.map((move, index) => (
              <h2 key={move.move.name} className="w-1/3">
                {move.move.name}
              </h2>
            ))}
          </section> */}
        </div>
      )}
    </>
  );
};

export default HomePage;
