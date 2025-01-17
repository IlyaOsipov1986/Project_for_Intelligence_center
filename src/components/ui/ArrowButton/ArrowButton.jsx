import { useState } from "react";
import classNames from "classnames";
import "../../ui/ArrowButton/ArrowButton.scss";
import buttonRedRow from "../../../assets/img/icons/buttonRedRow.svg";
import PropTypes from 'prop-types';

const ArrowButton = ({
    size=''// s - 48, m - 50
}) => {
    
    const [isHovered, setIsHovered] = useState(false);

    const btnClass = classNames({
        'arrow-button__wrap': true,
        [`arrow-button_size_${size}`]: true,
      });

    return (
        <div 
            className={btnClass}
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
    size: PropTypes.string,
}

export default ArrowButton;