import React, { useState, Suspense  } from "react";
import  '../Lightbox/LightBox.css';
import './Griditem.css';
import Spinner from '../../Spinner/Spinner'
import fetchData from '../../../Helpers/fetch'
const Lightbox = React.lazy(() => import('../Lightbox/LightBox.js'));

function GridItem({image}) {
  const [images, setImages] = useState([]);
  const [lightBoxstatus, setLightBoxStatus] = useState(false);
  const [galleryStatus, setGallery] = React.useState('closeLightBox')

  React.useEffect(() => {
    fetchData(image.image.alt, setImages)
  }, [])

    //   const fetchData = async () => {
    //     const response = await client.query(
    //       Prismic.Predicates.at("document.tags", [image.image.alt])
    //     )
    //     if (response) {
          
    //       const allUrls = response.results[0] ? response.results[0].data.images.map(image => image.image.url): []
    //       setImageurls(allUrls)
    //       setCurrentImageUrl(allUrls[0])
    //     }
    //   }
    //   fetchData()
    // }, [])

  function handleClick(){
    setLightBoxStatus(!lightBoxstatus)
    setGallery('openLightBox')
  }
  return (
    <div className="GridItem">
      { image ? <img src={image.image.url} onClick={handleClick} className='titleCover' alt='' loading="lazy"/> :  null }
      <Suspense fallback={<Spinner />}>
          { lightBoxstatus ? <Lightbox initImage={image.image.url} images={images} setter={setLightBoxStatus} gallerySetter={setGallery} galleryStatus={galleryStatus} />: null }
      </Suspense> 
    </div>
  );
}

export default GridItem;