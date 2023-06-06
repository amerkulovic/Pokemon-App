const Sprite = (props) => {
  return (
    <section>
      <h1 className="font-bold text-lg mt-5">Sprites</h1>
      <div className="flex flex-row justify-center">
        <img className="h-40 w-40 m-2" src={props.image1} />
        <img className="h-40 w-40 m-2" src={props.image2} />
      </div>
    </section>
  );
};

export default Sprite;
