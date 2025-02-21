import burgerMenu from "./../../../../assets/img/icons/burgerMenu.svg";
import PropTypes from "prop-types";
import "./MobileMenu.scss";

const BurgerButton = ({setMobileMenuShown}) => {

    return (
        <button type="button" className="burger" onClick={() => setMobileMenuShown(true)}>
            <img src={burgerMenu} alt="Burger"/>
        </button>
    );
};

BurgerButton.propTypes = {
    setMobileMenuShown: PropTypes.func,
}

export default BurgerButton;