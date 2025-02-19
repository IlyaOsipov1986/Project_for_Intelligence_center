import { Link } from "react-router-dom";
import "./HeaderRectangleButton.scss";
import PropTypes from 'prop-types';

const HeaderRectangleButton = ({titleButton, link}) => {

    return (
        <Link to={`/${link}`} className="header-rectangle-button__container" >
            {titleButton}
        </Link>
    )
}

HeaderRectangleButton.propTypes = {
    titleButton: PropTypes.string,
    link: PropTypes.string
}

export default HeaderRectangleButton;