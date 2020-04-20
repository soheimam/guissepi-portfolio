import React, { useState } from "react";
import './LightBox.css';
import Prismic from 'prismic-javascript'
import { client } from '../../../client'

function LightBox({image}) {
    const [imageStatus, setImageStatus] = useState(false);

    const [amount, setAmount] = React.useState(1)
    const [urls, setImageurls] = React.useState([])
    const [current, setCurrentposition] = React.useState(1)
    const [currentImageUrl, setCurrentImageUrl] = React.useState(image.url)

    const alt = image.alt ? image.alt : 'foo'
 

    
    
    function handleClick(){
        setImageStatus(!imageStatus)
        const fetchData = async () => {
          const response = await client.query(
            Prismic.Predicates.at("document.tags", [alt])
          )
          if (response) {

            const allUrls = response.results[0] ? response.results[0].data.images.map(image => image.image.url): []
            allUrls.push(currentImageUrl)
            setImageurls(allUrls)
            setAmount(response.results[0] ? response.results[0].data.images.length: 1)
          }
        }
        fetchData()
    }

    function handleClose(){
      setImageStatus(!imageStatus)
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
      setCurrentposition(current - 1)
      
    }

    if (image) {
      return (
        <div >
            <button onClick={handleNext} className='next'> Next </button>
            <button onClick={handleBack} className='back'> Back </button>
            <img src={currentImageUrl} onClick={handleClick}/> 
            <p> {current}/{amount} </p>
            <button onClick={handleClose} className='close'> close </button>
        </div>
    );
    }
    return null

}

export default LightBox;