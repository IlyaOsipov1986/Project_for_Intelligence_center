import '../Footer/Footer.scss';
import React from "react";
import FooterBottom from './FooterBottom';
import { footerData  } from "../../../config";
import FooterCard from '../Footer/FooterCard';

const Footer = () => {
    return (
        <footer className='footer-container'>
            <div className='footer-nav-item-empty'>
                <div className='bordered-element-left'/>
            </div>
            {footerData.map((el) => {
            return (
                <React.Fragment key={el.id}>
                    <FooterCard
                        {...el}
                    />
                </React.Fragment>
                )
            })}
            <div className='footer-nav-item-empty'>
                <div className='bordered-element-right'/>
            </div>
           <FooterBottom/>
        </footer>
    )
}
export default Footer;