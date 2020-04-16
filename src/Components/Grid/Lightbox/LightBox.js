import React, { useState } from "react";
import './LightBox.css';

function LightBox({image}) {
    const [imageStatus, setImageStatus] = useState(false);

function handleClick(){
    setImageStatus(!imageStatus)
}

    return (
        <div className={imageStatus ? "shownLightbox": "hiddenLightbox"}>
            
            <p className={imageStatus ? "showText next": "hideText"}> Next </p>
            <p className={imageStatus ? "showText back": "hideText"}> Back </p>
            <img src={image} onClick={handleClick}/> 
           
                <p className={imageStatus ? "showCount": "hideText"}> 1/6 </p>
                <p className={imageStatus ? "showClose": "hideText"} onClick={handleClick}> close </p>
           
            
        </div>
    );
}

export default LightBox;