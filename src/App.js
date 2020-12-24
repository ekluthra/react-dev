import logo from './logo.svg';
import './App.css';


const App = () => {

  const ID = process.env.REACT_APP_APP_ID;
  const KEY = process.env.REACT_APP_APP_KEY;

  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${ID}&app_key=${KEY}`;


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
