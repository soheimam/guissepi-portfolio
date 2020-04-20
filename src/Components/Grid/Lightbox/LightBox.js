import React, { useState } from "react";
import './LightBox.css';
import Prismic from 'prismic-javascript'
import { client } from '../../../client'

function LightBox({image, setter}) {
    console.log('running')

    const [urls, setImageurls] = React.useState([])
    const [galleryStatus, setGallery] = React.useState('openLightBox')

    const [current, setCurrentposition] = React.useState(1)
    const [currentImageUrl, setCurrentImageUrl] = React.useState(0)

    	
      React.useEffect(() => {
        const fetchData = async () => {
          const response = await client.query(
            Prismic.Predicates.at("document.tags", [image])
          )
          if (response) {
           
            const allUrls = response.results[0] ? response.results[0].data.images.map(image => image.image.url): []
            setImageurls(allUrls)
            setCurrentImageUrl(allUrls[0])
          }
        }
        fetchData()
      }, [])


    function handleClose(){
      setGallery('closeLightBox')
      setTimeout(() => {
        setter(false)
      }, 300)
    }
    function handleNext(){

      let indexCurrent = urls.indexOf(currentImageUrl)
      setCurrentImageUrl(urls[indexCurrent + 1])
      setCurrentposition(current + 1)

      if (indexCurrent === urls.length -1)
      {
        setCurrentImageUrl(urls[0])
        setCurrentposition(1)
      }
    }

    function handleBack(){
      let indexCurrent = urls.indexOf(currentImageUrl)
      console.log(indexCurrent)
      setCurrentImageUrl(urls[indexCurrent - 1])
      setCurrentposition(current - 1)
      if (indexCurrent === 0)
      {
        setCurrentImageUrl(urls[urls.length - 1])
        setCurrentposition(urls.length )
      }
    }

    if (image) {
      return (
        
        <div className={`lightbox ${galleryStatus}`}>
            <button onClick={handleNext} className='next'> Next </button>
            <button onClick={handleBack} className='back'> Back </button>
            <img src={currentImageUrl}  className='lightImage'/> 
            <p> {current}/{urls.length}</p>
            <button onClick={handleClose} className='close'> close </button>
        </div>
    );
    }
    return null

}

export default LightBox;