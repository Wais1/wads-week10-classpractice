import React from "react";
import { useState, useEffect } from "react";
import HeroCard from "../components/HeroCard";

const Home = () => {
  const [data, setData] = useState([
    {
      "name": "Loading data...",
      "alias": ""
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
    <>
      <h1 className="heading">Heroes</h1>
      <div className="container">
        {/* For each hero, show Hero component with data */}
        { data.map((hero) => (
          <HeroCard name={hero.name} alias={hero.alias}/>
          )) 
        }
      </div>
    </>
  );
}

export default Home;
