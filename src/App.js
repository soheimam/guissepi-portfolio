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
    let lastScrollY = 0; 
    const handleScroll = () => {
      lastScrollY = window.pageYOffset;
      // switch (lastScrollY) {
      //   case < 30 value:
      //       blah
      //     break;
      
      //   default:
      //     break;
      // }
      //.getBoundingClientRect().height


     let app = document.getElementsByTagName("BODY")[0];
   
      console.log(lastScrollY, 'adding scroll')
      console.log(app.getBoundingClientRect().height )
    };

    window.addEventListener('scroll', handleScroll, true);
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


  //  
  // this.handleScroll = handleScroll

  // function useEvent(event, handler, passive=false) {
  //   useEffect(() => {
  //     // initiate the event handler
      
  
  //     // this will clean up the event every time the component is re-rendered
  //     return function cleanup() {
  //       window.removeEventListener('scroll', handler);
  //     };
  //   });
  // }



  return (
    <main className="App">
      <Grid doc={doc} />
     
    </main>
  );
}

export default App;
