import React, { useState, Suspense  } from "react";
import  '../Lightbox/LightBox.css';
import './Griditem.css';
import Spinner from '../../Spinner/Spinner'
import fetchData from '../../../Helpers/fetch'
const Lightbox = React.lazy(() => import('../Lightbox/LightBox.js'));

function GridItem({image, imageId, isVisable,key}) {
  const [images, setImages] = useState([]);
  const [lightBoxstatus, setLightBoxStatus] = useState(false);
  const [galleryStatus, setGallery] = React.useState('closeLightBox')

  React.useEffect(() => {
    fetchData(image.image.alt, setImages)
  }, [])

  function handleClick(){
    setLightBoxStatus(!lightBoxstatus)
    setGallery('openLightBox')
  }
  return (
    <div className="GridItem">
 
    {/* var style = {"--animation-order": key } as React.CSSProperties; */}

      { image ? <img id={imageId} src={image.image.url} onClick={handleClick} className={`titleCover ${isVisable}`} alt='' style={{"--animation-order": key}} loading="lazy"/> :  null }
      <Suspense fallback={<Spinner />}>
          { lightBoxstatus ? <Lightbox initImage={image.image.url} images={images} setter={setLightBoxStatus} gallerySetter={setGallery} galleryStatus={galleryStatus} />: null }
      </Suspense> 
    </div>
  );
}

export default GridItem;