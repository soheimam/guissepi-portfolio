import React from 'react';
import './Griditem.css';
import image1 from './images/1.jpg';


function GridItem() {
  return (
    <div className="GridItem">

      <img src={image1}/>
    </div>
  );
}

export default GridItem;