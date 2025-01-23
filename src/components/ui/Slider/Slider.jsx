import "../Slider/Slider.scss";
import sliderImageOne from "../../../assets/img/sliderImageOne.png";
import sliderImageTwo from "../../../assets/img/sliderImageTwo.png";
import sliderIconOne from "../../../assets/img/icons/sliderIconOne.svg";
import sliderIconTwo from "../../../assets/img/icons/sliderIconTwo.svg";
import { useState } from "react";

const Slider = () => {

    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="slider-headline">
            <div className="slider-block">
                <div className="slider-square"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                />
                <div className="slider-block__logo"/>
            </div>
            <div className="slider-headline__wrap">
                <div className="slider-headline__image">
                    <img src={isHovered ? sliderImageTwo : sliderImageOne} style={{
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundPosition: 'bottom',
                            width: '100%',
                            height: '100%'
                        }}
                    />
                </div>    
            </div>
        </div>
    )
}
export default Slider;