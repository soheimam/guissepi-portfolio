import React, { useState, Suspense, useEffect, useRef } from "react";
import {gsap, Power3} from 'gsap'; 
 
import  '../Lightbox/LightBox.css';
import './Griditem.css';
import Spinner from '../../Spinner/Spinner';
import fetchData from '../../../Helpers/fetch';
import { useInView } from 'react-intersection-observer'

import useObserver from '../../../Helpers/Hooks/useObserver'

const Lightbox = React.lazy(() => import('../Lightbox/LightBox.js'));

function GridItem({image, imageId, isVisable,key}) {
  const [images, setImages] = useState([]);
  const [lightBoxstatus, setLightBoxStatus] = useState(false);
  const [galleryStatus, setGallery] = React.useState('closeLightBox');


const { format } = new Intl.NumberFormat("en-US", { maximumFractionDigits: 2 });

  
  const [ref, entry] = useObserver({
    threshold: 0.5,
    rootMargin: '10px'

  }); 

  console.log(entry)
  

  const gridText = useRef(null)

 

  useEffect(() => {
    fetchData(image.image.alt, setImages)
  }, [])

  function handleClick(){
    setLightBoxStatus(!lightBoxstatus)
    setGallery('openLightBox')
  }

 function isVisible(){

  
    const tl = new gsap.timeline();
    tl.to(entry.target, 0.8, { opacity: 1, y:10,  ease: Power3.easeOut,});
    tl.to(gridText.current, 0.8, { opacity: 1, y:-50,  ease: Power3.easeOut});
     
   

 }

  // useEffect(() => {
  //   if (inView) {
      
  //   const tl = new gsap.timeline();

  //   tl.to(ref, 0.8, { opacity: 0, y:100, scale:1, ease: Power3.easeOut, stagger: 0.1,},.2);
  //   tl.to(gridText.current, 0.8, { opacity: 1, y:-50, stagger: 0.1, ease: Power3.easeOut});
     
  //   }
  // }, [inView])

  return (
    <div className="GridItem">
 

    <h1 className='ProjectTitle'ref={gridText}> {image.image.alt}</h1>
     
      { image ? <img src={image.image.url} onClick={handleClick} className="titleCover" ref={ref}  isIntersection={entry.isIntersecting ? isVisible() : null}  alt='' loading="lazy"/> :  null }
      <Suspense fallback={<Spinner />}>
          {/* { lightBoxstatus ? <Lightbox initImage={image.image.url} images={images} setter={setLightBoxStatus} gallerySetter={setGallery} galleryStatus={galleryStatus} />: null } */}
      </Suspense> 
    
  
    </div>
  );
}

export default GridItem;

