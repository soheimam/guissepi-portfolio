import React from 'react'
import { Link } from "react-router-dom";
import Lottie from 'react-lottie';
import logo from './logo.svg';
import animationData from './cat.json';

import './Nav.css';



const Nav = () => {
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
        <nav>                
            {/* <a href='/'><img src={logo}/></a>
            <Lottie options={defaultOptions} />
            <a href="/about" className='animation'></a>    */}
        </nav>
    )
}

export default Nav


