import React from 'react';
import './App.css';
import Grid from './Components/Grid/Grid';
import Spinner from './Components/Spinner/Spinner';
import Prismic from 'prismic-javascript'
import { Date, Link, RichText } from 'prismic-reactjs'
import { client } from './client'
import { useEffect } from 'react';


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


  // let lastScrollY = 0;  
  // this.handleScroll = handleScroll

  // function useEvent(event, handler, passive=false) {
  //   useEffect(() => {
  //     // initiate the event handler
  //     window.addEventListener('scroll', this.handleScroll, true);
  
  //     // this will clean up the event every time the component is re-rendered
  //     return function cleanup() {
  //       window.removeEventListener('scroll', handler);
  //     };
  //   });
  // }

  // handleScroll = () => {

  //   lastScrollY = window.scrollY;

  //   console.log(lastScrollY, 'adding scroll')
  // };

  return (
    <div className="App">
      <Grid doc={doc}/>
     
    </div>
  );
}

export default App;
