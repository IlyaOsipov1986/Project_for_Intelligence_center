import classNames from "classnames";
import "../../ui/ArrowRedButton/ArrowRedButton.scss";
import PropTypes from 'prop-types';

const ArrowRedButton = (props) => {

    const {
        size='',// s - 48, m - 50
        linkUrl = '',
    } = props;
    
    const arrowBtnClass = classNames({
        'square-button': true,
        [`arrow-button_size_${size}`]: true,
      });
 
    return (
        <div className="arrow-button__container">
            <a href={linkUrl} className={arrowBtnClass}>
                <span className="arrow arrow-up"></span>
                <span className="arrow arrow-down"></span>
            </a>
        </div>
    )
}

ArrowRedButton.propTypes = {
    size: PropTypes.string,
    linkUrl: PropTypes.string
}

export default ArrowRedButton;