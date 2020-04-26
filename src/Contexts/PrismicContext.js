
import React, { createContext, useState } from 'react';
import { client } from '../client'
import Prismic from 'prismic-javascript';

export const PrismicContext = createContext();

const PrismicProvider = (props) => {
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
  

  })
  
  ;
  return (
    <PrismicContext.Provider value={{doc}}>
      {props.children}
    </PrismicContext.Provider>
  )
}

export default PrismicProvider;