import React, { Suspense } from "react";
import './App.css';
import Grid from './Components/Grid/Grid';
import Spinner from './Components/Spinner/Spinner';
import PrismicContextProvider from './Contexts/PrismicContext';



function App() {

  return (
    <PrismicContextProvider>
      <main className="App">
        <Grid />
      </main>
    </PrismicContextProvider>
  );
}

export default App;
