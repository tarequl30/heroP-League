import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import LeagueDetail from "./components/LeagueDetail/LeagueDetail";
import NoMatch from "./components/NoMatch/NoMatch";
import './App.css'

function App() {
  return (
      <Router>
      <Switch>
        <Route exact path='/'>
        <Home></Home>
        </Route>
        <Route path="/home">
          <Home/>
        </Route>
        <Route path="/about/:idLeague">
        <LeagueDetail></LeagueDetail>
        </Route>
        <Route path="*">
          <NoMatch></NoMatch>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
