import { Link } from "react-router-dom";
import { headerLinks } from './headerLinks';

const Nav = () => {
    return (
        <nav className="nav">
            <ul>
            {headerLinks.map((link) => (
                <li key={link.id}>
                <Link to={link.link} className="link">
                    {link.title}
                </Link>
                </li>
            ))}
            </ul>
      </nav>
    )
}
export default Nav;