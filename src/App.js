import AllPokemon from "./Containers/AllPokemon";
// import Pokemon from "./Components/Pokemon";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <h1>Pokedex</h1>
      <div>
        <AllPokemon/>
      </div>
    </div>
  );
}

export default App;
