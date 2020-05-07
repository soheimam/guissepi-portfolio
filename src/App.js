import React, { Suspense } from "react";
import './App.css';
import Grid from './Components/Grid/Grid';
import Spinner from './Components/Spinner/Spinner';
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
            <Link to="/about">About</Link>
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
          <Route path="/about">
            <About />
          </Route>
          <Route path="/:project" children={<Project />} />
        </Switch>
      </div>

    </Router>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

export default App;
