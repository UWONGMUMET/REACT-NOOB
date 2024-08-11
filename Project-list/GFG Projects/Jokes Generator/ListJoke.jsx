import React, { useState } from "react";
import Button from "./Button";
import '../Jokes Generator/ListJoke.jsx'

const ListJoke = () => {
  const [joke, setJoke] = useState("");

  const fetchApi = async () => {
    try {
        const response = await fetch('https://v2.jokeapi.dev/joke/Programming?type=single');
        const data = await response.json();
        setJoke(data.joke);
    } catch (error) {
        console.error('Error fetching the joke:', error);
    }
  }
  return <div className="joke">
    <Button callApi={fetchApi} />
    <p>{joke}</p>
  </div>;
};

export default ListJoke;
