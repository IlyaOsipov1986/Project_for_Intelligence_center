import PropTypes from 'prop-types';
import ArrowRedButton from "../ArrowRedButton/ArrowRedButton";
import "../../ui/EventsButton/EventsButton.scss";

const EventsButton = ({ title='', linkUrl='' }) => {

    return (
        <div className='events-button'>
            <div className='events-button__title'>{title}</div>
            <ArrowRedButton
                size='s'
                linkUrl={linkUrl}
            />
        </div>
    )
}

EventsButton.propTypes = {
    title: PropTypes.string.isRequired,
    activeBtn: PropTypes.bool,
    linkUrl: PropTypes.string
}

export default EventsButton;