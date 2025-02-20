import { Link } from "react-router-dom";
import "./HeaderRectangleButton.scss";
import PropTypes from 'prop-types';

const HeaderRectangleButton = ({titleButton, link}) => {

    return (
        <Link to={`/${link}`} className="header-rectangle-button__container" >
            <p className="header-rectangle-button__text-btn">{titleButton}</p>
        </Link>
    )
}

HeaderRectangleButton.propTypes = {
    titleButton: PropTypes.string,
    link: PropTypes.string
}

export default HeaderRectangleButton;