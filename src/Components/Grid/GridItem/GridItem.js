import React, { useState } from "react";
import './Griditem.css';
import Lightbox from "../Lightbox/LightBox.js";
import  "../Lightbox/LightBox.css";

function GridItem({image}) {

  const [lightBoxstatus, setLightBoxStatus] = useState(false);


  function handleClick(){

    setLightBoxStatus(!lightBoxstatus)
        
  }
 

  return (
    <div className="GridItem">

     { image? <img src={image.image.url} onClick={handleClick}/> : null}

     {/* {image.map(images => <image src={images.image.url}/>)} */}
      {/* <Lightbox image={image.image}  /> */}

      {lightBoxstatus?<Lightbox image={image.image} className={lightBoxstatus? "shownLightbox": "hiddenLightbox"} />: console.log('running false') }

      
    </div>
  );
}

export default GridItem;