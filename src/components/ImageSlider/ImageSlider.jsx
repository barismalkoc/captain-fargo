import React, {useEffect, useState} from 'react';
import "./ImageSlider.scss"
function ImageSlider({slides}) {
    const [current, setCurrent] = useState(0);
    const length = slides.length;
    const nextSlide = () => {
        if(current === length - 1) {
            setCurrent(0);
        }else{
            setCurrent(current + 1);
        }
    }
    const prevSlide = () => {
        if(current === 0) {
            setCurrent(length - 1);
        }else {
            setCurrent(current -1);
        }
    }
    return (
        <div className={"slider"}>
            <span className={"left-arrow"} onClick={prevSlide}></span>
            <span className={"right-arrow"} onClick={nextSlide}></span>
            {slides.map((slide,index) => {
                return (
                    <div key={index}>
                        {index === current && (<img className={"slide-image"} src={slide.image} alt={"captain-fargo"}/>)}
                    </div>
                )
            })}
        </div>
    );
}

export default ImageSlider;