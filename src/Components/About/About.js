import React from 'react'
import about from './about.svg'
import './About.css';

function About() {
    return (
        <div className='About'>
          
           <img src={about}/>
           <p>
           Adipisicing ad sit voluptate ad anim qui reprehenderit amet proident nulla. Eiusmod ex irure voluptate deserunt nisi ad excepteur duis mollit mollit aliqua ullamco. Nulla ex esse tempor eiusmod adipisicing
           </p>

           <div className='social'>
           <a href="#" class="fa fa-facebook"> Instagram</a>
           <a href="#" class="fa fa-twitter">Email</a>
           </div>

        </div>
    )
}

export default About
