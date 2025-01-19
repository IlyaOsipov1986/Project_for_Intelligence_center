import '../Footer/Footer.scss';
import FooterBottom from './FooterBottom';
import FooterTop from './FooterTop';

const Footer = () => {
    return (
        <div className='footer-container'>
           <FooterTop/>
           <FooterBottom/>
        </div>
    )
}
export default Footer;