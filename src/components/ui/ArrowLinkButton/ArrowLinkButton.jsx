import "../ArrowLinkButton/ArrowLinkButton.scss";
import PropTypes from 'prop-types';

const ArrowLinkButton = ({title=''}) => {

    return (
        <div className="arrow-link-button__container">
            <p className="arrow-link-button__title">{title}</p>
            <div className="arrow-link-button__icon"/>
        </div>
    )
}

ArrowLinkButton.propTypes = {
    title: PropTypes.string,
}

export default ArrowLinkButton;