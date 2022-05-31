import logo from './logo.svg';
import './App.css';
import { Route, Switch, Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { HomeTemplate } from './templates/Home/HomeTemplate';
import Home from './pages/Home/Home';

export const history = createBrowserHistory();


function App() {
  return (
    <Router history={history}>
      <Switch >
        <HomeTemplate path="/home" exact Component={Home} />

        <HomeTemplate path="/" exact Component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
