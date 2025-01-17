import Container from "../Container/Container";
import Divaider from "../../ui/Divaider/Divaider";
import '../Contacts/Contacts.scss';
import ArrowButton from "../../ui/ArrowButton/ArrowButton";
import contactsLogoIICentre from "../../../assets/img/icons/contactsLogoIICentre.svg";

const Contacts = () => {
    return (
        <>
            <Divaider/>
            <Container>
                <div className="contacts__grid-container">
                    <div className="contacts__grid-item1"></div>
                    <div className="contacts__grid-item2"></div>
                    <div className="contacts__grid-item3"></div>
                    <div className="contacts__grid-row-bottom">
                        <div className="contacts__grid-row-bottom__item">
                            <ArrowButton size="m"/>
                            <h2>Telegram</h2>
                        </div>
                        <div className="contacts__grid-row-bottom__item">
                            <ArrowButton size="m"/>
                            <h2>Vkontakte</h2>
                        </div>
                    </div>
                    <div className="contacts__grid-image-item">
                        <img src={contactsLogoIICentre} alt="картинка" />
                    </div>
                </div>
            </Container>
        </>
    )
}
export default Contacts;