
import React, { createContext, useState } from 'react';
import { client } from '../client'
import Prismic from 'prismic-javascript';

export const PrismicContext = createContext();

const PrismicProvider = (props) => {
  const [doc, setDocData] = React.useState([])
 
  React.useEffect(() => {
  
    const fetchData = async () => {
      const response = await client.query(
        Prismic.Predicates.at("document.tags", [image])
      )
      
      if (response) {
        setDocData(response.results[0].data)
      }
    }
    fetchData()
  

  });

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await client.query(
        Prismic.Predicates.at("document.tags", [image])
      )
      if (response) {
       
        const allUrls = response.results[0] ? response.results[0].data.images.map(image => image.image.url): []
        setImageurls(allUrls)
        setCurrentImageUrl(allUrls[0])
      }
    }
    fetchData()
  }, [])


  return (
    <PrismicContext.Provider value={{doc}}>
      {props.children}
    </PrismicContext.Provider>
  )
}

export default PrismicProvider;