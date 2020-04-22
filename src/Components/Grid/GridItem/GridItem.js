import React, { useState } from "react";
import  '../Lightbox/LightBox.css';
import './Griditem.css';
import Lightbox from '../Lightbox/LightBox.js'
import Jello from 'react-reveal/Jello';



function GridItem({image, key}) {

  const [lightBoxstatus, setLightBoxStatus] = useState(false);
  const [galleryStatus, setGallery] = React.useState('closeLightBox')


  function handleClick(){
    setLightBoxStatus(!lightBoxstatus)
    setGallery('openLightBox')
  }

  return (

   
    <div className="GridItem">
      { image ? <img src={image.image.url} onClick={handleClick} className='titleCover' loading="lazy"/> :  null }
      { lightBoxstatus ? <Lightbox image={image.image.alt} setter={setLightBoxStatus} gallerySetter={setGallery} galleryStatus={galleryStatus}/>: null }
    </div>
   
  );
}

export default GridItem;