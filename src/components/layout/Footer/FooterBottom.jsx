import { useMemo } from "react";

const FooterBottom = () => {

    const currentYear = useMemo(() => new Date().getFullYear(), []);

    return (
        <section className="footer__bottom">
            <span className="footer__sign">© Санкт-Петербургский государственный университет (СПбГУ) {currentYear}. Все права защищены.</span>
        </section>
    )
}
export default FooterBottom;