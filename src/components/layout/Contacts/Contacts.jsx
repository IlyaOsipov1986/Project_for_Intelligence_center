import Container from "../Container/Container";
import '../Contacts/Contacts.scss';
import contactsLogoIICentre from "../../../assets/img/icons/contactsLogoIICentre.svg";

const Contacts = () => {
    return (
        <Container>
            <div className="grid-container">
                <div className="item">Колонка 1</div>
                <div className="item">Колонка 2</div>
                <div className="item">Колонка 3</div>
                <div className="item">Колонка 4</div>
                <div className="item">Колонка 5</div>
                <div className="item">Колонка 5</div>
                 <div className="image-item">
                    <img src={contactsLogoIICentre} alt="картинка" />
                </div>
            </div>
        </Container>
    )
}
export default Contacts;