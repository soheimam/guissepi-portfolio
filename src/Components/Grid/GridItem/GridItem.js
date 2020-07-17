import React, { useState, Suspense, useEffect, useRef } from "react";
import {gsap, Power3} from 'gsap'; 
 
import  '../Lightbox/LightBox.css';
import './Griditem.css';
import Spinner from '../../Spinner/Spinner';
import fetchData from '../../../Helpers/fetch';

import useObserver from '../../../Helpers/Hooks/useObserver';

const Lightbox = React.lazy(() => import('../Lightbox/Project.js'));


function GridItem({image, imageId, isVisable,key}) {
  const [images, setImages] = useState([]);
  const [lightBoxstatus, setLightBoxStatus] = useState(false);
  const [galleryStatus, setGallery] = React.useState('closeLightBox');


const { format } = new Intl.NumberFormat("en-US", { maximumFractionDigits: 2 });

  
  const [ref, entry] = useObserver({
    threshold: 0.2,
    rootMargin: '0px'

  }); 

  const gridText = useRef(null)

 

  useEffect(() => {
    fetchData(image.image.alt, setImages)
  }, [])


 function isVisible(){

  
    const tl = new gsap.timeline();
    tl.to(entry.target, 1.2, { opacity: 1, y:10,  ease: Power3.easeOut,});
    tl.to(gridText.current, 0.8, { opacity: 1, y:-50,  ease: Power3.easeOut});
     
   

 }

  return (
    <div className="GridItem">

    <h1 className='ProjectTitle'ref={gridText}> {image.image.alt}</h1>
    <a href={image.image.alt}><img src={image.image.url}  className="titleCover" ref={ref}  isintersection={entry.isIntersecting ? isVisible() : null}  alt='' loading="lazy"/> </a>
    
    </div>
  );
}

export default GridItem;

