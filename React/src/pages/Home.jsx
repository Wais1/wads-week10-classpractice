import React from "react";
import { useState, useEffect } from "react";

const Home = () => {
  const [data, setData] = useState([
    {
      "name": "Test Name",
      "alias": "Test Alias"
    },
  ])

  // Fetch data on page load
  useEffect(() => {
    fetch('http://127.0.0.1:8000/heroes/')
    .then(response => response.json())
    // Blocked by CORS
    .then(data => setData(data));
  },[])

  return (
    <div>
      {/* For each hero, show Hero component with data */}
      { data.map((hero) => (
          // <HeroCard name={data.name} alias={data.alias}/>
            <h1> {hero.name} {hero.alias} </h1>
          )) 
      }
    </div>
  );
}

export default Home;
