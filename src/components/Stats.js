const Stats = (props) => {
  return (
    <div>
      <h1>Stats</h1>
      {props.data.map((stat) => (
        <h1>{stat}</h1>
      ))}
    </div>
  );
};

export default Stats;
