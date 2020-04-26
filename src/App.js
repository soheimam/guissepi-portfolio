import React from 'react';
import './App.css';
import Grid from './Components/Grid/Grid';
import PrismicContextProvider from './Contexts/PrismicContext';



function App() {

  return (
    <main className="App">

      <PrismicContextProvider>
      <Grid />
      </PrismicContextProvider>
     
    </main>
  );
}

export default App;
