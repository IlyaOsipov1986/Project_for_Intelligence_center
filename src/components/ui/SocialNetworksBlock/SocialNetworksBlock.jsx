import "../../ui/SocialNetworksBlock/SocialNetworksBlock.scss";
import React from "react";
import PropTypes from 'prop-types';
import EventsButton from "../EventsButton/EventsButton";
import { useState } from "react";
import SocialNetworkIcon from "../SocialNetworkIcon/SocialNetworkIcon.jsx";

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
                    <React.Fragment key={i}>
                        <SocialNetworkIcon
                            el={el}
                            activeHover={true}
                            index={i}
                            isHovered={isHovered}
                            setIsHovered={setIsHovered}
                        />
                    </React.Fragment>
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