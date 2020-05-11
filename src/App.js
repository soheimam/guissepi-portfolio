import React, { Suspense } from "react";
import './App.css';
import Grid from './Components/Grid/Grid';
import About from './Components/About/About';
import Project from './Components/Grid/Lightbox/Project'
import PrismicContextProvider from './Contexts/PrismicContext';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {

  return (
    <Router>
      <div>
        <ul>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
        <hr />
        <Switch>
          <Route exact path="/">
              <main className="App">
              <PrismicContextProvider>
                <Grid />
                </PrismicContextProvider>
              </main>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/:project" children={<Project />} />
        </Switch>
      </div>

    </Router>
  );
}


export default App;
