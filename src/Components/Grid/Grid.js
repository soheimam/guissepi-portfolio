import React, { useContext } from 'react';
import './Grid.css';
import GridItem from './GridItem/GridItem';
import {PrismicContext} from '../../Contexts/PrismicContext'


import {logo} from './logo.svg'


function Grid() {
  // const images = doc.doc.images ? doc.doc.images : []
  const { doc } = useContext(PrismicContext);
  const images = doc.images ? doc.images : []

  return (
    
    <div className="Grid">

      <img src={logo}/>
     
        {images.map((image, key) =><GridItem image={image} key={key} doc={doc}loading="lazy"/>)}
        
    </div>
  );
}

export default Grid;
