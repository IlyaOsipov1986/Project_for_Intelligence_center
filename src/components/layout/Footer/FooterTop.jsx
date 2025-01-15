import { footerData  } from "../../../config";

const FooterTop = () => {
    return (
        <section className="footer-top">
            <div className="footer-nav">
                <div className="footer-nav-item">    
                </div>
                {footerData.map((el) => {
                    return (
                        <div key={el.id} className="footer-nav-item">
                            {el.title}
                        </div>
                    )
                })}
                <div className="footer-nav-item">
                </div>
            </div>
        </section>
    )
}
export default FooterTop;