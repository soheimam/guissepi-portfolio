import React, { useState } from "react";
import  '../Lightbox/LightBox.css';
import './Griditem.css';
import Lightbox from '../Lightbox/LightBox.js'



function GridItem({image}) {

  const [lightBoxstatus, setLightBoxStatus] = useState(false);
  const [galleryStatus, setGallery] = React.useState('closeLightBox')


  function handleClick(){
    setLightBoxStatus(!lightBoxstatus)
    setGallery('openLightBox')
  }

  return (
    <div className="GridItem">
      { image ? <img src={image.image.url} onClick={handleClick} className='titleCover'/> :  null }
      { lightBoxstatus ? <Lightbox image={image.image.alt} setter={setLightBoxStatus}/>: null }
    </div>
  );
}

export default GridItem;