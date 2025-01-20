import '../Footer/Footer.scss';
import React from "react";
import FooterBottom from './FooterBottom';
import { footerData  } from "../../../config";
import FooterCard from '../Footer/FooterCard';

const Footer = () => {
    return (
        <div className='footer-container'>
            {footerData.map((el) => {
            return (
                <React.Fragment key={el.id}>
                    <FooterCard
                        {...el}
                    />
                </React.Fragment>
                )
            })}
           <FooterBottom/>
        </div>
    )
}
export default Footer;