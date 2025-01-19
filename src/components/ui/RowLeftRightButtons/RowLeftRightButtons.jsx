import "../RowLeftRightButtons/RowLeftRightButtons.scss";
import arrowLeftRed from "../../../assets/img/icons/arrowLeftRed.svg";
import arrowRightBlack from "../../../assets/img/icons/arrowRightBlack.svg";

const RowLeftRightButtons = () => {
    return (
        <div className="row-left-right-buttons__container">
            <img src={arrowLeftRed} alt=""/>
            <img src={arrowRightBlack} alt=""/>
        </div>
    )
}
export default RowLeftRightButtons;