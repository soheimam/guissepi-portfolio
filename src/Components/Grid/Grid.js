import React from 'react';
import './Grid.css';
import firstHalf from './firsthalf.svg';
import secondHalf from './secondhalf.svg';
import GridItem from './GridItem/GridItem.js';


function Grid() {
  return (
    <div className="Grid">
        <img src={firstHalf} className="Logo"/>
        <img src={secondHalf} className="Logo"/>
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />
    </div>
  );
}

export default Grid;
