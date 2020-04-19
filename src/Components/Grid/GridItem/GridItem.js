import React, { useState } from "react";
import './Griditem.css';
import Lightbox from "../Lightbox/LightBox.js";

function GridItem({image}) {

  return (
    <div className="GridItem">
        <Lightbox image={image.image}  />
    </div>
  );
}

export default GridItem;