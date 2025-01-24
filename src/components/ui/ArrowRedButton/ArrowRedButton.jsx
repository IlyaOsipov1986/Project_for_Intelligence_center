import classNames from "classnames";
import "../../ui/ArrowRedButton/ArrowRedButton.scss";
import PropTypes from 'prop-types';

const ArrowRedButton = ({
    size=''// s - 48, m - 50
}) => {
    
    const arrowBtnClass = classNames({
        'square-button': true,
        [`arrow-button_size_${size}`]: true,
      });
 
    return (
        <div className="arrow-button__container">
            <a href="#" className={arrowBtnClass}>
                <span className="arrow arrow-up"></span>
                <span className="arrow arrow-down"></span>
            </a>
        </div>
    )
}

ArrowRedButton.propTypes = {
    size: PropTypes.string,
}

export default ArrowRedButton;