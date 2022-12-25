import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  let [topCars, setTopCars] = useState([]);

  let getTopCars = async () => {
    let response = await axios.get("/topCars");
    setTopCars(response.data);
  };

  return (
    <div className="App">
      <button
        onClick={() => {
          getTopCars();
        }}
      >
        Get Top Cars
      </button>
      {topCars.map((car) => {
        return <h1>{car}</h1>;
      })}
    </div>
  );
}

export default App;
