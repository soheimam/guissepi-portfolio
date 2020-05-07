import React, { useEffect } from "react";
import './LightBox.css';
import { client } from '../../../client'
import Prismic from 'prismic-javascript';

import eye from './eye.svg'

import { useParams } from "react-router-dom";

function Project() {

   

    const [images, setImages] = React.useState([])
    let { project } = useParams();

    useEffect(() => {
      client.query(
        Prismic.Predicates.at("document.tags", [project])
      ).then((response) => {
        console.log(response, 'response return')
        setImages(response.results[0].data.images)
        console.log(response.results[0].data.images, 'images here')
      });
      
    }, [])
  


      return (
       
      <div className='projectPage'>
      <div className='project'>
     <div className='text'>
     <h1>Test</h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
     </div>
          {images.map((image, i) => {
            return  <img src={image.image.url}  alt='' loading="lazy"/>   
          })}
        
     </div>
      </div>
        
        
    );
  


}

export default Project;