import { useState, useEffect } from "react";
import HomeMessage from "../components/HomeMessage";
import Nav from "../components/Nav";
import Sprite from "../components/Sprite";

const HomePage = () => {
  let [pokemon, setPokemon] = useState(null);
  let [input, setInput] = useState("");
  let [pageStyling, setPageStyling] = useState("");
  let [statStyling, setStatStyling] = useState("");
  let [moveStyling, setMoveStyling] = useState("");
  let [total, setTotal] = useState(0);
  let [name, setName] = useState("");

  let generateTotalStat = (numbers) => {
    total = 0;
    numbers.stats.map((stat) => {
      setTotal((total += stat.base_stat));
    });
  };

  let capitlizeName = (pokemon) => {
    let nameArray = pokemon.name.split("");
    let restOfName = nameArray.slice(1).join("");
    nameArray = nameArray[0].toUpperCase() + restOfName;
    setName(nameArray);
  };

  const searchButtonHandler = async () => {
    await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`)
      .then((response) => response.json())
      .then((data) => {
        setPokemon(data);

        generateTotalStat(data);
        capitlizeName(data);

        if (data.types[0].type.name === "psychic") {
          setPageStyling("flex flex-col text-center justify-center px-4 w-2/5 border-4 border-4 border-pink-400 bg-pink-200 rounded-lg mx-2 mb-3 max-md:w-10/12 max-md:mx-0");
          setStatStyling("flex flex-wrap flex-col items-center py-3 border-4 border-pink-400 rounded-lg mx-2 max-md:mx-0");
          setMoveStyling("border-4 border-pink-400 rounded-lg mt-6 mx-2 max-md:mx-0");
        } else if (data.types[0].type.name === "water") {
          setPageStyling("flex flex-col text-center justify-center px-4 w-2/5 border-4 border-4 border-blue-400 bg-blue-200 rounded-lg mx-2 mb-3 max-md:w-10/12 max-md:mx-0");
          setStatStyling("flex flex-wrap flex-col items-center py-3 border-4 border-blue-400 rounded-lg mx-2 max-md:mx-0");
          setMoveStyling("border-4 border-blue-400 rounded-lg mt-6 mx-2 max-md:mx-0");
        } else if (data.types[0].type.name === "grass") {
          setPageStyling("flex flex-col text-center justify-center px-4 w-2/5 border-4 border-4 border-green-400 bg-green-200 rounded-lg mx-2 mb-3 max-md:w-10/12 max-md:mx-0");
          setStatStyling("flex flex-wrap flex-col items-center py-3 border-4 border-green-400 rounded-lg mx-2 max-md:mx-0");
          setMoveStyling("border-4 border-green-400 rounded-lg mt-6 mx-2 max-md:mx-0");
        } else if (data.types[0].type.name === "dragon") {
          setPageStyling("flex flex-col text-center justify-center px-4 w-2/5 border-4 border-4 border-purple-400 bg-purple-300 rounded-lg mx-2 mb-3 max-md:w-10/12 max-md:mx-0");
          setStatStyling("flex flex-wrap flex-col items-center py-3 border-4 border-purple-400 rounded-lg mx-2 max-md:mx-0");
          setMoveStyling("border-4 border-purple-400 rounded-lg mt-6 mx-2 max-md:mx-0");
        } else if (data.types[0].type.name === "poison") {
          setPageStyling("flex flex-col text-center justify-center px-4 w-2/5 border-4 border-4 border-purple-400 bg-purple-200 rounded-lg mx-2 mb-3 max-md:w-10/12 max-md:mx-0");
          setStatStyling("flex flex-wrap flex-col items-center py-3 border-4 border-purple-400 rounded-lg mx-2 max-md:mx-0");
          setMoveStyling("border-4 border-purple-400 rounded-lg mt-6 mx-2 max-md:mx-0");
        } else if (data.types[0].type.name === "electric") {
          setPageStyling("flex flex-col text-center justify-center px-4 w-2/5 border-4 border-4 border-yellow-400 bg-yellow-200 rounded-lg mx-2 mb-3 max-md:w-10/12 max-md:mx-0");
          setStatStyling("flex flex-wrap flex-col items-center py-3 border-4 border-yellow-400 rounded-lg mx-2 max-md:mx-0");
          setMoveStyling("border-4 border-yellow-400 rounded-lg mt-6 mx-2 max-md:mx-0");
        } else if (data.types[0].type.name === "bug") {
          setPageStyling("flex flex-col text-center justify-center px-4 w-2/5 border-4 border-4 border-green-400 bg-green-100 rounded-lg mx-2 mb-3 max-md:w-10/12 max-md:mx-0");
          setStatStyling("flex flex-wrap flex-col items-center py-3 border-4 border-green-400 rounded-lg mx-2 max-md:mx-0");
          setMoveStyling("border-4 border-green-400 rounded-lg mt-6 mx-2 max-md:mx-0");
        } else if (data.types[0].type.name === "fire") {
          setPageStyling("flex flex-col text-center justify-center px-4 w-2/5 border-4 border-4 border-red-400 bg-red-200 rounded-lg mx-2 mb-3 max-md:w-10/12 max-md:mx-0");
          setStatStyling("flex flex-wrap flex-col items-center py-3 border-4 border-red-400 rounded-lg mx-2 max-md:mx-0");
          setMoveStyling("border-4 border-red-400 rounded-lg mt-6 mx-2 max-md:mx-0");
        } else if (data.types[0].type.name === "dark") {
          setPageStyling("flex flex-col text-center justify-center px-4 w-2/5 border-4 border-4 border-black bg-slate-400 rounded-lg mx-2 mb-3 max-md:w-10/12 max-md:mx-0");
          setStatStyling("flex flex-wrap flex-col items-center py-3 border-4 border-black rounded-lg mx-2 max-md:mx-0");
          setMoveStyling("border-4 border-black rounded-lg mt-6 mx-2 max-md:mx-0");
        } else if (data.types[0].type.name === "fairy") {
          setPageStyling("flex flex-col text-center justify-center px-4 w-2/5 border-4 border-4 border-pink-500 bg-pink-100 rounded-lg mx-2 mb-3 max-md:w-10/12 max-md:mx-0");
          setStatStyling("flex flex-wrap flex-col items-center py-3 border-4 border-pink-500 rounded-lg mx-2 max-md:mx-0");
          setMoveStyling("border-4 border-pink-500 rounded-lg mt-6 mx-2 max-md:mx-0");
        } else if (data.types[0].type.name === "normal") {
          setPageStyling("flex flex-col text-center justify-center px-4 w-2/5 border-4 border-4 border-slate-400 bg-slate-100 rounded-lg mx-2 mb-3 max-md:w-10/12 max-md:mx-0");
          setStatStyling("flex flex-wrap flex-col items-center py-3 border-4 border-slate-400 rounded-lg mx-2 max-md:mx-0");
          setMoveStyling("border-4 border-slate-400 rounded-lg mt-6 mx-2 max-md:mx-0");
        } else if (data.types[0].type.name === "ice") {
          setPageStyling("flex flex-col text-center justify-center px-4 w-2/5 border-4 border-4 border-blue-500 bg-blue-100 rounded-lg mx-2 mb-3 max-md:w-10/12 max-md:mx-0");
          setStatStyling("flex flex-wrap flex-col items-center py-3 border-4 border-blue-500 rounded-lg mx-2 max-md:mx-0");
          setMoveStyling("border-4 border-blue-500 rounded-lg mt-6 mx-2 max-md:mx-0");
        } else if (data.types[0].type.name === "fighting") {
          setPageStyling("flex flex-col text-center justify-center px-4 w-2/5 border-4 border-4 border-orange-500 bg-orange-200 rounded-lg mx-2 mb-3 max-md:w-10/12 max-md:mx-0");
          setStatStyling("flex flex-wrap flex-col items-center py-3 border-4 border-orange-500 rounded-lg mx-2 max-md:mx-0");
          setMoveStyling("border-4 border-orange-500 rounded-lg mt-6 mx-2 max-md:mx-0");
        } else if (data.types[0].type.name === "ground") {
          setPageStyling("flex flex-col text-center justify-center px-4 w-2/5 border-4 border-4 border-orange-400 bg-orange-100 rounded-lg mx-2 mb-3 max-md:w-10/12 max-md:mx-0");
          setStatStyling("flex flex-wrap flex-col items-center py-3 border-4 border-orange-400 rounded-lg mx-2 max-md:mx-0");
          setMoveStyling("border-4 border-orange-400 rounded-lg mt-6 mx-2 max-md:mx-0");
        } else if (data.types[0].type.name === "flying") {
          setPageStyling("flex flex-col text-center justify-center px-4 w-2/5 border-4 border-4 border-purple-200 bg-purple-100 rounded-lg mx-2 mb-3 max-md:w-10/12 max-md:mx-0");
          setStatStyling("flex flex-wrap flex-col items-center py-3 border-4 border-purple-200 rounded-lg mx-2 max-md:mx-0");
          setMoveStyling("border-4 border-purple-200 rounded-lg mt-6 mx-2 max-md:mx-0");
        } else if (data.types[0].type.name === "rock") {
          setPageStyling("flex flex-col text-center justify-center px-4 w-2/5 border-4 border-4 border-orange-500 bg-orange-300 rounded-lg mx-2 mb-3 max-md:w-10/12 max-md:mx-0");
          setStatStyling("flex flex-wrap flex-col items-center py-3 border-4 border-orange-500 rounded-lg mx-2 max-md:mx-0");
          setMoveStyling("border-4 border-orange-500 rounded-lg mt-6 mx-2 max-md:mx-0");
        } else if (data.types[0].type.name === "ghost") {
          setPageStyling("flex flex-col text-center justify-center px-4 w-2/5 border-4 border-4 border-purple-500 bg-purple-300 rounded-lg mx-2 mb-3 max-md:w-10/12 max-md:mx-0");
          setStatStyling("flex flex-wrap flex-col items-center py-3 border-4 border-purple-500 rounded-lg mx-2 max-md:mx-0");
          setMoveStyling("border-4 border-purple-500 rounded-lg mt-6 mx-2 max-md:mx-0");
        } else if (data.types[0].type.name === "steel") {
          setPageStyling("flex flex-col text-center justify-center px-4 w-2/5 border-4 border-4 border-slate-500 bg-slate-300 rounded-lg mx-2 mb-3 max-md:w-10/12 max-md:mx-0");
          setStatStyling("flex flex-wrap flex-col items-center py-3 border-4 border-slate-500 rounded-lg mx-2 max-md:mx-0");
          setMoveStyling("border-4 border-slate-500 rounded-lg mt-6 mx-2 max-md:mx-0");
        }
      });
  };

  return (
    <>
      <Nav changeHandler={(event) => setInput(event.target.value.toLowerCase())} clickHandler={searchButtonHandler} />
      {!pokemon && <HomeMessage />}
      {pokemon && (
        <div className="flex items-center mb-3 max-md:flex-col max-md:justify-center">
          <section className={pageStyling}>
            <h1 className="font-bold text-4xl mt-3">{name}</h1>
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
          <div className="flex flex-col w-3/5 max-md:w-10/12">
            <section className={statStyling}>
              <h1 className="flex text-center font-bold text-2xl pb-2">Stats</h1>
              {pokemon.stats.map((stat) => (
                <div key={stat.stat.name} className="flex flex-row justify-between w-2/3">
                  <h2 className="font-bold">{stat.stat.name}</h2>
                  <h2>{stat.base_stat}</h2>
                </div>
              ))}
              <div className="flex flex-row justify-between w-2/3 border-t-2 border-black mt-1">
                <h2 className="font-bold text-xl">Total</h2>
                <h2 className="font-bold text-xl">{total}</h2>
              </div>
            </section>
            <div className={moveStyling}>
              <div className="flex justify-center pt-3">
                <h1 className="font-bold text-2xl pb-2">Move List</h1>
              </div>
              <section className="flex flex-wrap justify-center text-center py-3 h-96 overflow-scroll">
                {pokemon.moves.map((move, index) => (
                  <h2 key={move.move.name} className="w-1/3">
                    {move.move.name}
                  </h2>
                ))}
              </section>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HomePage;
