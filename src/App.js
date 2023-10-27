import{Counter,Welcome,Todo,Navbar}  from "./components";


const hobby = ["soccer", "Music", "Travel"];

const App = () => {
  // use state is a  function that return an array with two elements
  // which takes one parameter
  // the first element have the value of the parameter being passed
  // second is a function for updating the value of the first element
  

  return (
    <div>
      {/* <Welcome name="Sonam" hobbies={hobby} />
      <Counter /> */}
      <Navbar/>
      <Todo/>
    </div>
  );
};

export default App;
