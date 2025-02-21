import "./MobileMenu.scss";
import PropTypes from "prop-types";
import classNames from "classnames";

const MobileMenu = (props) => {

    const {
        menuRef,
        mobileMenuShown = false,
        setMobileMenuShown,
    } = props;

    const mobileMenuClasses = classNames({
        "mobile-menu": true,
        shown: mobileMenuShown,
    });

    return (
        <section className={mobileMenuClasses} ref={menuRef}>
                dfdf
        </section>
    )
}

MobileMenu.propTypes = {
    menuRef: PropTypes.any,
    mobileMenuShown: PropTypes.bool,
    setMobileMenuShown: PropTypes.func,
}


export default MobileMenu;