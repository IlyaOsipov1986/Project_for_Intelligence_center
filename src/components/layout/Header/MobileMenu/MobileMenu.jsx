import "./MobileMenu.scss";
import PropTypes from "prop-types";
import classNames from "classnames";
import HeaderRectangleButton from "../../../ui/HeaderRectangleButton/HeaderRectangleButton.jsx";
import Nav from "../Nav.jsx";
import closeIcon from "../../../../assets/img/icons/closeIcon.svg";
import logotypeIIcentreMobile from "../../../../assets/img/icons/logotypeIIcentreMobile.svg";
import {Link} from "react-router-dom";
import React from "react";
import SocialNetworkIcon from "../../../ui/SocialNetworkIcon/SocialNetworkIcon.jsx";
import {socialNetworksCalendarData} from "../../../../config.js";

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


    const changeOrderItems = [...socialNetworksCalendarData].reverse();

    return (
        <section className={mobileMenuClasses} ref={menuRef}>
            <div className="mobile-menu__header">
                    <Link to='/'>
                        <img className="mobile-menu__header-logo" src={logotypeIIcentreMobile} alt=""/>
                    </Link>
                    <img onClick={() => setMobileMenuShown(false)} className='mobile-menu__header-close-btn' src={closeIcon} alt=""/>
            </div>
            <Nav
                isMobileActive={true}
            />
            <div className="mobile-menu__footer">
                <div>
                    <HeaderRectangleButton
                        titleButton="ОСТАВИТЬ ЗАЯВКУ"
                    />
                </div>
                <div>
                    {changeOrderItems.map((el, i) => {
                        return (
                            <React.Fragment key={i}>
                                <SocialNetworkIcon
                                    el={el}
                                    activeHover={false}
                                />
                            </React.Fragment>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

MobileMenu.propTypes = {
    menuRef: PropTypes.any,
    mobileMenuShown: PropTypes.bool,
    setMobileMenuShown: PropTypes.func,
}

export default MobileMenu;