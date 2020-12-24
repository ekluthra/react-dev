import './App.css';
import React, {useEffect, useState} from "react";

const App = () => {

  const ID = process.env.REACT_APP_APP_ID;
  const KEY = process.env.REACT_APP_APP_KEY;
  
  //useeffect is just a function that is going to run every time the page loads
  useEffect( () => {
    getRecipes();
  }, []); //the , [] will make it so it runs only once, when the page first loads
  //adding the state in the square brackets makes it so that it runs when the value changes
  
  const getRecipes = async () =>{
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${ID}&app_key=${KEY}`);
  
    const data = await response.json();

    console.log(data);
  };

  return(
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default App;
