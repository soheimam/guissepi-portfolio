import React, { useEffect, useState } from "react";
import './LightBox.css';
import { client } from '../../../client'
import Prismic from 'prismic-javascript';
import scroll from './scroll.svg'

import {
  motion,
  useViewportScroll,
  useSpring,
  useTransform
} from "framer-motion";

import useObserver from '../../../Helpers/Hooks/useObserver';


import { useParams } from "react-router-dom";

function Project() {

    const [images, setImages] = React.useState([])
    const [header, setHeader] = React.useState([])
    const [info, setInfo] = React.useState([])
    let { project } = useParams();

    const [isComplete, setIsComplete] = useState(false);
    const [bodyOffset, setBodyOffset] = useState(
      document.body.getBoundingClientRect()
    );
    const [scrollX, setScrollX] = useState(bodyOffset.left);
   
   

   

    useEffect(() => {
      client.query(
        Prismic.Predicates.at("document.tags", [project])
      ).then((response) => {
     
        setImages(response.results[0].data.images)
        setHeader(response.results[0].data.description[0].text)
        setInfo(response.results[0].data.info1[0].text)

        console.log(response.results[0].data.info1[0].text)
        
      });
   
    }, [])

    useEffect(() => {
      window.addEventListener("scroll", listener);
      return () => {
        window.removeEventListener("scroll", listener);
      };
    });

    const listener = e => {
      setBodyOffset(document.body.getBoundingClientRect());
      setScrollX(bodyOffset.left);

   
   
    };

   

      return (

       
       
      <div className='projectPage'>
 
      
     <div className='text'>
     <h1>{ header }</h1>
      <p>{ info } </p>
     </div>
    
     < div className='imageGallery'>
          {images.map((image, i) => {
            return  <div className='imgContainer'>  <img src={image.image.url}  alt='' loading="lazy"/> </div> 
          })}

    </div>



      </div>
     
        
        
    );
  


}

export default Project;