import React from "react";
import Greet from "./Components/Greet";
import Person from "./Components/Person";
import PersonList from "./Components/PersonList";
import Status from "./Components/Status";

const App = () => {
  const personInfo = {
    first: "John",
    last: "Doe",
  };

  const personListinfo = [
    {
      first: "Demo",
      age: 18,
    },
    {
      first: "Demo",
      age: 20,
    },
  ];
  return (
    <div>
      <Greet name="Demo" message={20} />
      <Person name={personInfo} />
      <PersonList name={personListinfo}/>
      <Status status="loading"/>
    </div>
  );
};

export default App;
