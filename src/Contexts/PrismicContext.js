
import React, { createContext, useState } from 'react';
import fetchData from '../Helpers/fetch'

export const PrismicContext = createContext();

const PrismicProvider = (props) => {
  const [doc, setDocData] = React.useState([])
 
  React.useEffect(() => {
    fetchData('home', setDocData)
  })
  
  return (
    <PrismicContext.Provider value={{doc}}>
      {props.children}
    </PrismicContext.Provider>
  )
}

export default PrismicProvider;