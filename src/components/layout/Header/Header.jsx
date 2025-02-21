import '../Header/Header.scss';
import Nav from './Nav';
import logotypeIIcentre from '../../../assets/img/icons/logotypeIIcentre.svg';
import { Link } from 'react-router-dom';
import HeaderRectangleButton from "./../../ui/HeaderRectangleButton/HeaderRectangleButton";

const Header = () => {
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
                    <HeaderRectangleButton
                        titleButton="ОСТАВИТЬ ЗАЯВКУ"
                    />
                </div>
            </div>
        </header>
    )
}
export default Header;