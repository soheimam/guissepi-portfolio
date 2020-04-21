import React from 'react';
import './Grid.css';
import logo from './logo.svg';
import GridItem from './GridItem/GridItem';


function Grid(doc) {
  const images = doc.doc.images ? doc.doc.images : []

  return (
    <div className="Grid">
        <img src={logo} className="Logo"/>
        {images.map((image, key) => <GridItem image={image} key={key} loading="lazy"/>)}
    </div>
  );
}

export default Grid;
