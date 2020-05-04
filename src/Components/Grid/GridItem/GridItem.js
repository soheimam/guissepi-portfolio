import React, { useState, Suspense, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
 
import  '../Lightbox/LightBox.css';
import './Griditem.css';
import Spinner from '../../Spinner/Spinner';
import fetchData from '../../../Helpers/fetch';
const Lightbox = React.lazy(() => import('../Lightbox/LightBox.js'));



function GridItem({image, imageId, isVisable,key}) {
  const [images, setImages] = useState([]);
  const [lightBoxstatus, setLightBoxStatus] = useState(false);
  const [galleryStatus, setGallery] = React.useState('closeLightBox');

  const [show, doShow] = useState({itemOne: false});

  const gridWrapper = useRef(null)
  const gridImage = useRef(null)
  const gridText = useRef(null)
 

  useLayoutEffect(() => {
    const topPos = element => element.getBoundingClientRect().top;
   //added to reduce redundancy
    const div1Pos = topPos(gridImage.current)
    

    const onScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight;

      const tl = new gsap.timeline({ delay: .8});
      
      if (div1Pos < scrollPos) {

        
        doShow(state => ({ ...state, itemOne: true }));
  


        // tl.from(gridImage.current, 1.2, {y: 1280, ease: 'Power3.easeOut'},'Start')

        tl.to(gridImage.current, 0.8, { opacity: 1, scale:1,  ease:'Power3.easeOut', });
        tl.to(gridImage.current, 0.2, { y:100, ease: "Power3.easeOut",stagger: 0.1,});
      
        // tl.to(gridImage.current, 2, { y: 50 }, { y: 0 });

      }
      
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

//const scrollPos = window.scrollY + window.innerHeight;
//TweenMax.to([div1Pos.current],  2, {top:"50%" });




  React.useEffect(() => {
    fetchData(image.image.alt, setImages)
  }, [])

  function handleClick(){
    setLightBoxStatus(!lightBoxstatus)
    setGallery('openLightBox')
  }

  return (
    <div className="GridItem" ref={el => GridItem = el}>
 

    <h1 className='ProjectTitle'ref={gridText}> {image.image.alt}</h1>
     
      { image ? <img src={image.image.url} onClick={handleClick} className={`titleCover ${isVisable}`} ref={gridImage} alt='' loading="lazy"/> :  null }
      <Suspense fallback={<Spinner />}>
          { lightBoxstatus ? <Lightbox initImage={image.image.url} images={images} setter={setLightBoxStatus} gallerySetter={setGallery} galleryStatus={galleryStatus} />: null }
      </Suspense> 
    
  
    </div>
  );
}

export default GridItem;

