import React from 'react';
import './App.css';
import Grid from './Components/Grid/Grid';
import Prismic from 'prismic-javascript'
import { Date, Link, RichText } from 'prismic-reactjs'
import { client } from './client'


function App() {

  const [doc, setDocData] = React.useState([])
 
  React.useEffect(() => {
    const fetchData = async () => {
      const response = await client.query(
        Prismic.Predicates.at("document.tags", ['home'])
      )
      
      if (response) {
        setDocData(response.results[0].data)
      }
    }
    fetchData()
  }, [])

  return (
    <div className="App">
      <Grid doc={doc}/>
    </div>
  );
}

export default App;
