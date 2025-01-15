import '../Header/Header.scss';
import Nav from './Nav';
import logotypeIIcentre from '../../../assets/img/icons/logotypeIIcentre.svg';

const Header = () => {
    return (
        <header className='header'>
            <div className='header-container'>
                <img src={logotypeIIcentre} alt='иконка'/>
                <div className='topbar__block'>
                    <Nav/>
                </div>
                <a className='header-link-icon' href='/'/>
            </div>
        </header>
    )
}
export default Header;