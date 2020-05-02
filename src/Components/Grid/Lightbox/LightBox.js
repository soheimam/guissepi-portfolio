import React from "react";
import './LightBox.css';

import eye from './eye.svg'
// import Prismic from 'prismic-javascript'
// import { client } from '../../../client'
// import {useSpring, animated} from 'react-spring'


function LightBox({initImage, images, setter, gallerySetter, galleryStatus}) {

    const urls = []
    urls.unshift(initImage)
    images.images.map(image => urls.push(image.image.url))
    // const props = useSpring({opacity: 1, from: {opacity: 0}})

    const [currentImagePosition, setCurrentImagePosition] = React.useState(1)
    const [currentImageUrl, setCurrentImageUrl] = React.useState(urls[0])


    function handleClose(){
      gallerySetter('closeLightBox')
      setTimeout(() => {
        setter(false)
      }, 500)
    }

    function handleNext(){
      let indexCurrent = urls.indexOf(currentImageUrl)
      setCurrentImageUrl(urls[indexCurrent + 1])
      setCurrentImagePosition(currentImagePosition + 1)
      if (indexCurrent === urls.length -1)
      {
        setCurrentImageUrl(urls[0])
        setCurrentImagePosition(1)
      }
    }

    function handleBack(){
      let indexCurrent = urls.indexOf(currentImageUrl)
      console.log(indexCurrent)
      setCurrentImageUrl(urls[indexCurrent - 1])
      setCurrentImagePosition(currentImagePosition - 1)
      if (indexCurrent === 0)
      {
        setCurrentImageUrl(urls[urls.length - 1])
        setCurrentImagePosition(urls.length )
      }
    }


    if (images) {
      return (
        <div className={`lightbox ${galleryStatus}`}>  
            <button onClick={handleNext} className='next'> Next </button>
            <button onClick={handleBack} className='back'> Back </button>
            <img src={currentImageUrl} alt='' className='lightImage' loading="lazy"/>
            <p> {currentImagePosition}/{urls.length}</p>
            <div className='eye'> <img src={eye} alt='eye'/></div>
            <button onClick={handleClose} className='close'> close </button>
            
        </div>
    );
    }
    return null

}

export default LightBox;