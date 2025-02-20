import "../Slider/Slider.scss";
import { animated, useSpring } from 'react-spring';
import sliderImageOne from "../../../assets/img/sliderImageOne.png";
import sliderImageTwo from "../../../assets/img/sliderImageTwo.png";
// import sliderIconOne from "../../../assets/img/icons/sliderIconOne.svg";
// import sliderIconTwo from "../../../assets/img/icons/sliderIconTwo.svg";
import { useState } from "react";

const Slider = () => {

    const [isHovered, setIsHovered] = useState(false);

    const springProps = useSpring({
        opacity: isHovered ? 1 : 0,
        config: { duration: 300 },
      });

    return (
        <div className="slider-headline">
            <div className="slider-block">
                <div className="slider-square"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                />
                <div className="slider-block__logo">
                    <div className="slider-block__logo-item-up"/>
                    <div className="slider-block__logo-item-down"/>
                </div>
            </div>
            <div className="slider-headline__wrap">
                <div className="slider-headline__image">
                    <img src={sliderImageOne} style={{
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundPosition: 'bottom',
                            width: '100%',
                            height: '100%',
                        }}
                        alt="image-bg"
                    />
                    <animated.img
                        src={sliderImageTwo}
                          style={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            opacity: springProps.opacity,
                        }}
                    />
                </div>    
            </div>
        </div>
    )
}
export default Slider;