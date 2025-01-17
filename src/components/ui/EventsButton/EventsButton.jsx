import PropTypes from 'prop-types';
import ArrowButton from "../ArrowButton/ArrowButton";
import "../../ui/EventsButton/EventsButton.scss";

const EventsButton = ({ title='' }) => {

    return (
        <div className='events-button'>
            <div className='events-button__title'>{title}</div>
            <ArrowButton
                size='s'
            />
            <div className='events-button__add-hover-bg'/>
        </div>
    )
}

EventsButton.propTypes = {
    title: PropTypes.string.isRequired,
    activeBtn: PropTypes.bool,
}

export default EventsButton;