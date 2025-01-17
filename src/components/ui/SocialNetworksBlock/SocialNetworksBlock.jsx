import "../../ui/SocialNetworksBlock/SocialNetworksBlock.scss";
import PropTypes from 'prop-types';
import EventsButton from "../EventsButton/EventsButton";
import { useState } from "react";

const SocialNetworksBlock = ({activeBtn=true, titleEventBtn='', socialData=[] }) => {

    const [isHovered, setIsHovered] = useState(null);
    
    return (
        <div className="social-networks-block__container">
            {activeBtn && 
                <EventsButton
                    title={titleEventBtn}
                />
            }
            {socialData.map((el, i) => {
                return (
                    <img key={i} 
                    onMouseEnter={() => setIsHovered(i)} 
                    onMouseLeave={() => setIsHovered(null)}
                    src={isHovered === i ? el.imgHover : el.img} alt=""/>
                )
            })}
        </div>
    )
}

SocialNetworksBlock.propTypes = {
    titleEventBtn: PropTypes.string.isRequired,
    activeBtn: PropTypes.bool,
    socialData: PropTypes.array
}

export default SocialNetworksBlock;