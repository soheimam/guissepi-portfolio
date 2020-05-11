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
 
      <div className='project'>
     <div className='text'>
     <h1>Test</h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
     </div>
          {images.map((image, i) => {
            return  <img src={image.image.url}  alt='' loading="lazy"/>   
          })}
        
     </div>

{console.log(scrollX)}
     <motion.div className='progressBar' 
      animate={{
          position: 'fixed',
          x: 10,
          y: 10, 
          width: scrollX,
         
          }}
      />

      </div>
     
        
        
    );
  


}

export default Project;