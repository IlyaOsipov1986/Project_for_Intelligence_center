import { useState } from "react";
import "../../ui/ArrowButton/ArrowButton.scss";
import buttonRedRow from "../../../assets/img/icons/buttonRedRow.svg";
import PropTypes from 'prop-types';

const ArrowButton = ({size=''}) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div 
            className="arrow-button__wrap"
            // onMouseEnter={() => setIsHovered(true)}
            // onMouseLeave={() => setIsHovered(false)}
        >
             <img 
                src={buttonRedRow}
                alt=""
            />
            {/* <img 
                src={buttonRedRow}
                alt="First Image"
                style={{opacity: isHovered ? 0 : 100}} 
                className="arrow-button__wrap-image" 
            />
            <img 
                src={buttonRedRow} 
                alt="Second Image"
                style={{opacity: isHovered ? 100 : 0}}  
                className="arrow-button__wrap-image" 
            /> */}
        </div>
    )
}

ArrowButton.propTypes = {
    size: PropTypes.string.isRequired,
}

export default ArrowButton;