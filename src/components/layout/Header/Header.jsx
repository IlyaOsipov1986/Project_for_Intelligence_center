import '../Header/Header.scss';
import Nav from './Nav';
import logotypeIIcentre from '../../../assets/img/icons/logotypeIIcentre.svg';
import { Link } from 'react-router-dom';
import HeaderRectangleButton from "./../../ui/HeaderRectangleButton/HeaderRectangleButton";
import useMobile from "../../../utils/hooks/useMobile.js";
import MobileMenu from "./MobileMenu/MobileMenu.jsx";
import BurgerButton from "./MobileMenu/BurgerButton.jsx";
import useClickOutside from "../../../utils/hooks/useClickOutside.js";

const Header = () => {

    const {
        ref: menuRef,
        isOpened: mobileMenuShown,
        setIsOpened: setMobileMenuShown,
    } = useClickOutside();

    const isMobile = useMobile();

    return (
        <header className='header'>
            <div className='header-container'>
                <Link to='/'>
                    <img className='header__logo' src={logotypeIIcentre} alt='иконка'/>
                </Link>
                <div className='topbar__block'>
                    <Nav/>
                </div>
                <div className='header-link__block'>
                    <a className='header-link-icon' href='/'/>
                    <div className='header-link__btn-link'>
                        <HeaderRectangleButton
                            titleButton="ОСТАВИТЬ ЗАЯВКУ"
                        />
                    </div>
                    {isMobile &&
                        <BurgerButton
                            setMobileMenuShown={setMobileMenuShown}
                        />
                    }
                </div>
            </div>
            {isMobile &&
                <MobileMenu
                    menuRef={menuRef}
                    mobileMenuShown={mobileMenuShown}
                    setMobileMenuShown={setMobileMenuShown}
                />
            }
        </header>
    )
}
export default Header;