import '../TitleBlock/TitleBlock.scss';
import EventsButton from "../../ui/EventsButton/EventsButton";
import PropTypes from 'prop-types';

const TitleBlock = ({ title= '', titleBtn='', activeBtn = false }) => {

    return (
        <div className='title-block__container'>
            <h2>{title}</h2>
            {activeBtn &&
                <EventsButton
                    title={titleBtn}
                />
            }
        </div>
    )
}

TitleBlock.propTypes = {
    title: PropTypes.string.isRequired,
    activeBtn: PropTypes.bool,
    titleBtn: PropTypes.string
}

export default TitleBlock;