import { Link } from "react-router-dom";
import { headerLinks } from './headerLinks';
import PropTypes from "prop-types";

const Nav = ({isMobileActive = false}) => {
    return (
        <nav className="nav">
            <ul>
            {headerLinks.map((link) => (
                <li key={link.id}>
                <Link to={link.link} className="link">
                    {isMobileActive ? link.title.toLocaleUpperCase() : link.title}
                </Link>
                </li>
            ))}
            </ul>
      </nav>
    )
}

Nav.propTypes = {
    isMobileActive: PropTypes.bool
}

export default Nav;