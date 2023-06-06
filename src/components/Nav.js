const Nav = (props) => {
  return (
    <div className="bg-blue-400 py-4 flex justify-between items-center mb-5">
      <h1 className="text-4xl text-yellow-500 font-bold mx-2">PokeApp</h1>
      <div className="mr-2">
        <input className="mx-2 py-3 rounded-md" onChange={props.changeHandler} />
        <button className="bg-yellow-400 p-3 rounded-lg font-bold text-blue-600" onClick={props.clickHandler}>Search</button>
      </div>
    </div>
  );
};

export default Nav;
