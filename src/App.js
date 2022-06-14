import logo from './logo.svg';
import './App.scss';
import { Route, Switch, Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { HomeTemplate } from './templates/Home/HomeTemplate';
import Home from './pages/Home/Home';
import PageNoFound from "./PageNotFound/PageNotFound"
import { Suspense } from 'react';
import Loading from './Components/Loading/Loading';

export const history = createBrowserHistory();


function App() {
  return (
    <Suspense
      fallback={
        <div className="loading">
          <Loading />
        </div>
      }>
      <Router history={history}>
        <Switch >
          <HomeTemplate path="/home" exact Component={Home} />

          <HomeTemplate path="/" exact Component={Home} />
          <Route path="" component={PageNoFound} />
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
