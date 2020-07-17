import React, { useContext, useRef, useEffect, useState } from 'react';
import './Grid.css';
import GridItem from './GridItem/GridItem';
import {PrismicContext} from '../../Contexts/PrismicContext';
import { TweenMax } from "gsap";
import Lottie from 'react-lottie';
import animationData from './bg.json';
import About from '../About/About'

import logo from './logo.svg'
// const logo1 = useRef(logo1);

function Grid() {
  // const images = doc.doc.images ? doc.doc.images : []

  const [isLoading, setIsLoading] = useState(true);
  const [isVisable, setIsVisable] = useState('off');
  const { doc } = useContext(PrismicContext);
  
  const images = doc.images ? doc.images : [];
 
  // const block = useRef(null);
  
  

  useEffect(() => {

    //  TweenMax.to(['#logo'],  2, {top:"50%",  });
    //  TweenMax.to(['#logo'],  0.8, {top:"0%", });

      
    setTimeout(() => {
      if(isLoading){
          setIsLoading(false)
          setIsVisable('on')
      }
    }, 1900);
  })



    


      // for (let i = 0; i < GridItem.length; index++) {
      //   const element = array[i];
        
      // }
      // TweenMax.from([griditem.current], 
      //   1, 
      // {autoAlpha:0, delay: 2 }, 
      // {autoAlpha:1,immediateRender:false});

//   },[]);
      const defaultOptions = {
        loop: true,
        autoplay: true,
        className:'Lottie',
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      }


      return (
        <div className="Grid">
        {/* <Lottie options={defaultOptions} /> */}
         
          
             {!isLoading ? images.map((image, key) =><GridItem image={image} isVisable={isVisable} imageId={key} loading="lazy"/>): null}
{/*       
             <About isVisable={isVisable}/> */}
        </div>
      )

}

export default Grid;
