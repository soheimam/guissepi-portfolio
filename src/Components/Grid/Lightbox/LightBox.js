import React, { useState } from "react";
import './LightBox.css';
import Prismic from 'prismic-javascript'
import { client } from '../../../client'

function LightBox({image}) {
    const [imageStatus, setImageStatus] = useState(false);
    const [doc, setDocData] = React.useState([])
    const [amount, setAmount] = React.useState(1)
    const [urls, setImageurls] = React.useState([])
    const [currentImageUrl, setCurrentImageUrl] = React.useState(image.url)

    const alt = image.alt ? image.alt : 'foo'
    console.log(alt)
    
    function handleClick(){
        setImageStatus(!imageStatus)
        const fetchData = async () => {
          const response = await client.query(
            Prismic.Predicates.at("document.tags", [alt])
          )
          if (response) {
            setDocData(response.results[0])
            setImageurls(response.results[0] ? response.results[0].data.images.map(image => image.image.url): [])
            setAmount(response.results[0] ? response.results[0].data.images.length: 1)
          }
        }
        fetchData()
    }

    function handleClose(){
      setImageStatus(!imageStatus)
    }

    function handleNext(){
      
      console.log(urls.length)

      for (let index = 0; index < urls.length; index++) {

        setCurrentImageUrl(urls[index])
        
      }
   
      
    }

    function handleBack(){
      

      for (let index = 0; index < urls.length; index++) {

        setCurrentImageUrl(urls[index -1])
        
      }
    }

    if (image) {
      return (
        <div className={imageStatus ? "shownLightbox": "hiddenLightbox"}>
            <button onClick={handleNext} className='next'> Next </button>
            <button onClick={handleBack} className='back'> Back </button>
            <img src={currentImageUrl} onClick={handleClick}/> 
            <p> 1/{amount} </p>
            <button onClick={handleClose} className='close'> close </button>
        </div>
    );
    }
    return null

}

export default LightBox;