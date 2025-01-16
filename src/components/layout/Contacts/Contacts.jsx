import Container from "../Container/Container";
import '../Contacts/Contacts.scss';
import contactsLogoIICentre from "../../../assets/img/icons/contactsLogoIICentre.svg";

const Contacts = () => {
    return (
        <Container>
            <div className="grid-container">
                <div className="item1"></div>
                <div className="item2"></div>
                <div className="item3"></div>
                <div className="item4">
                    <div>
                        1
                    </div>
                    <div>
                        2
                    </div>
                </div>
                <div className="image-item">
                    <img src={contactsLogoIICentre} alt="картинка" />
                </div>
            </div>
        </Container>
    )
}
export default Contacts;