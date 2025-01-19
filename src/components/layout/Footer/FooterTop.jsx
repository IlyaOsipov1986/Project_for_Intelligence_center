import React from "react";
import { footerData  } from "../../../config";
import FooterCard from '../Footer/FooterCard';
import Container from "../../layout/Container/Container";

const FooterTop = () => {
    return (
        <section className="footer-top">
            <Container>
                <div className="footer-nav">
                        {footerData.map((el) => {
                        return (
                            <React.Fragment key={el.id}>
                                <FooterCard
                                    {...el}
                                />
                            </React.Fragment>
                            )
                        })}
                </div>
            </Container>
        </section>
    )
}
export default FooterTop;