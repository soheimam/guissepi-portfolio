import React, { useState } from "react";
import './Griditem.css';
import image from './images/1.jpg';
import Lightbox from "../Lightbox/LightBox.js";

function GridItem() {
  return (
    <div className="GridItem">
        <Lightbox image={image} />
    </div>
  );
}

export default GridItem;