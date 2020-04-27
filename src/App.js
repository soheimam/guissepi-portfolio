import React from 'react';
import './App.css';
import Grid from './Components/Grid/Grid';
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
