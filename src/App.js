import Home from "./components/Home";
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Planets from "./components/Planets";
import Characters from "./components/Characters"
import Planetform from "./components/Planetform";
import Characterform from "./components/Characterform";
import Navigationbar from "./components/Navigationbar";
import Spacious from "./components/Spacious";
import Planetsides from "./components/PlanetSides";
import Charactersides from './components/Charactersides'

function App() {
  return (
    <Router>
      <div className="App">
      
        <Switch>
          <Route exact path="/">
            <Spacious />
          </Route> 
          <Route path="/home">
            <Home />
          </Route> 
          <Route path="/planets">
            <Planets />
          </Route>
          <Route path="/characters">
            <Characters />
          </Route>
          <Route path="/planetform">
            <Planetform />
          </Route>
          <Route path="/charform">
            <Characterform />
          </Route>
          <Route path="/planetsides">
            <Planetsides />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
