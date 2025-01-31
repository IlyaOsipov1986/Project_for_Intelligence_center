import PropTypes from 'prop-types';
import "../RowLeftRightButtons/RowLeftRightButtons.scss";
import arrowLeftRed from "../../../assets/img/icons/arrowLeftRed.svg";
import arrowRightBlack from "../../../assets/img/icons/arrowRightBlack.svg";

const RowLeftRightButtons = ({prevGroup, nextGroup}) => {

    return (
        <div className="row-left-right-buttons__container">
            <img onClick={prevGroup} src={arrowLeftRed} alt=""/>
            <img onClick={nextGroup} src={arrowRightBlack} alt=""/>
        </div>
    )
}

RowLeftRightButtons.propTypes = {
    prevGroup: PropTypes.func,
    nextGroup: PropTypes.func
}

export default RowLeftRightButtons;