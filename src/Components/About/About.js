import React from 'react'
import about from './about.svg'
import './About.css';
import cat from './cat.json';
import Lottie from 'react-lottie';

function About() {

    const defaultOptions = {
        loop: false,
        autoplay: false,
        className:'Lottie',
        animationData: cat,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    }

    return (

        <div className='About'>
          <h1> Hi I'm Tom</h1>
          
          <div className='social'>
           <p>
           Adipisicing ad sit voluptate ad anim qui reprehenderit amet proident nulla. Eiusmod ex irure voluptate deserunt nisi ad excepteur duis mollit mollit aliqua ullamco
           </p>

          
           <a href="#" class="fa fa-facebook"> Instagram</a>
           <a href="#" class="fa fa-twitter">Email</a>
           </div>

        </div>
    )
}

export default About
