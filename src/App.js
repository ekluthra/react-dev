import './App.css';
import Recipe from './Recipe';
import React, {useEffect, useState} from "react";

const App = () => {

  const ID = process.env.REACT_APP_APP_ID;
  const KEY = process.env.REACT_APP_APP_KEY;

  const [recipes, setRecipes] = useState([]); 
  const [search, setSearch] = useState('');
  
  //this state is for only submitting when we click the search button
  const [query, setQuery] = useState('chicken');

  //useeffect is just a function that is going to run every time the page loads
  useEffect( () => {
    getRecipes();
  }, [query]); //the , [] will make it so it runs only once, when the page first loads
  //adding the state in the square brackets makes it so that it runs when the value changes
  
  const getRecipes = async () =>{
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${ID}&app_key=${KEY}`);
  
    const data = await response.json();

    //console.log(data); //if we wanted to get the "hits" attribute then we would just do data.hits
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }

  return(
    <div className="App">
      <form onSubmit = {getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.label}
            title ={recipe.recipe.label} 
            calories={recipe.recipe.calories} 
            image = {recipe.recipe.image}
            ingredients = {recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
