import PropTypes from 'prop-types';
import "../RowLeftRightButtons/RowLeftRightButtons.scss";

const RowLeftRightButtons = ({prevGroup, nextGroup}) => {

    return (
        <div className="row-left-right-buttons__container">
            <button onClick={prevGroup} className="row-left-right-buttons__btn-prev"/>
            <button onClick={nextGroup} className="row-left-right-buttons__btn-next"/>
        </div>
    )
}

RowLeftRightButtons.propTypes = {
    prevGroup: PropTypes.func,
    nextGroup: PropTypes.func
}

export default RowLeftRightButtons;