export const Welcome = ({ name, hobbies }) => {
  console.log("welcome rendering");
  return (
    <div>
      <h1>Welcome {name[0].toUpperCase() + name.slice(1).toLowerCase()} </h1>

      <ul>
        {hobbies.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default Welcome;
