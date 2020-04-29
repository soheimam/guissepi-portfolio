import React, { useContext, useRef, useEffect, useState } from 'react';
import './Grid.css';
import GridItem from './GridItem/GridItem';
import {PrismicContext} from '../../Contexts/PrismicContext';
import { TweenMax } from "gsap";


import logo from './logo.svg'


function Grid() {
  // const images = doc.doc.images ? doc.doc.images : []
  console.log('running first')
  const [isLoading, setIsLoading] = useState(true);
  const [isVisable, setIsVisable] = useState('off');
  const { doc } = useContext(PrismicContext);
  const images = doc.images ? doc.images : [];
  // const logo1 = useRef(logo);
  // const block = useRef(null);
  
  if (images){
    TweenMax.to(['#logo'],  2, {top:"50%" });
    TweenMax.to(['#logo'],  2, {top:"3%"});

    // for (let index = 0; index < images.length; index++) {
     
    
    // TweenMax.to([`#block${index +1}`],  2, {delay: 3 + index, opacity:0});
    //   // TweenMax.to([`block${index +1}`],  2, {delay: 5 + index, opacity:1});
      
    // }
  }

  useEffect(() => {
    setTimeout(() => {
      if(isLoading){
          setIsLoading(false)
          setIsVisable('on')
      }
    }, 1900);
  })



    
// // gsap.to("#id", {y: 50, duration: 1, delay: 1});

//     // TweenMax.fromTo([logo1.current], 
//     //   1, 
//     //   {top:"50%" }, 
//     //   {top:"0%"});

//       // for (let i = 0; i < GridItem.length; index++) {
//       //   const element = array[i];
        
//       // }
//       // TweenMax.from([griditem.current], 
//       //   1, 
//       // {autoAlpha:0, delay: 2 }, 
//       // {autoAlpha:1,immediateRender:false});

//   },[]);


      return (
        <div className="Grid">
            <img src={logo} alt='logo' id='logo' className='Logo'/>
             {!isLoading ? images.map((image, key) =><GridItem image={image} isVisable={isVisable} imageId={key} loading="lazy"/>): null}
        </div>
      )

}

export default Grid;
