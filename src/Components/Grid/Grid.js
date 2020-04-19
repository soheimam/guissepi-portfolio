import React from 'react';
import './Grid.css';
import firstHalf from './firsthalf.svg';
import secondHalf from './secondhalf.svg';
import GridItem from './GridItem/GridItem';


function Grid(doc) {
  const images = doc.doc.images ? doc.doc.images : []

  return (
    <div className="Grid">
        <img src={firstHalf} className="Logo"/>
        <img src={secondHalf} className="Logo"/>
        {images.map(image => <GridItem image={image}/>)}
    </div>
  );
}

export default Grid;
