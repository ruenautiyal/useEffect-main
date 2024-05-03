import React, { useState, useEffect } from "react";
import './App.css';

function App() {
  const [name, setName] = useState("Rue");
  const [count, setCount] = useState(0);
  const [great, setGreat] = useState("");

  useEffect(() => {
    console.log(`Count is ${count}`);
  }, [count]);

  useEffect(() => {
    console.log(`Name is ${name}`);
    if (name) {
      setGreat(`Hello ${name}!`);
    }
  }, [name]);

  const handleButtonClick = () => {
    setCount(count + 1);
  }

  return (
    <div>
      <p> Count: {count}</p>
      <button onClick={handleButtonClick}> Increment count</button>
       
      <p> Name: {name}</p>
      <input onChange={(e) => setName(e.target.value)}></input>

      <p>Great: {great}</p>
    </div>
  );
}

export default App;
