import PropTypes from 'prop-types';
import ArrowRedButton from "../ArrowRedButton/ArrowRedButton";
import "../../ui/EventsButton/EventsButton.scss";

const EventsButton = ({ title='' }) => {

    return (
        <div className='events-button'>
            <div className='events-button__title'>{title}</div>
            <ArrowRedButton
                size='s'
            />
        </div>
    )
}

EventsButton.propTypes = {
    title: PropTypes.string.isRequired,
    activeBtn: PropTypes.bool,
}

export default EventsButton;