import { useState } from "react";
import ArrowRedButton from "../ArrowRedButton/ArrowRedButton";
import "../CalendarEvents/CalendarEvents.scss";
import emptyImage from '../../../assets/img/teamEmptyImage.png';
import PropTypes from 'prop-types';
// import redSqureFill from "../../../assets/img/icons/redSqureFill.svg";
// import redSqureEmpty from "../../../assets/img/icons/redSqureEmpty.svg";

const CalendarEventsRow = ({item}) => {

    const [isHovered, setIsHovered] = useState(null);

    return (
        <div className='calendar-events-row__wrap'>
            <div className="calendar-events-row__date">
                {item.date}
                <span className="calendar-events-row__date-time">{item.time}</span>
            </div>
            <div className="calendar-events-row__container"
                 onMouseEnter={() => setIsHovered(item.id)}
                 onMouseLeave={() => setIsHovered(null)}
            >
                <img className="calendar-events-row__speaker-image" src={item.speakerImg ? item.speakerImg : emptyImage} alt=""/>
                <div className="calendar-events-row__title">
                    <h6>{item.title}</h6>
                    <h5>{item.speaker}</h5>
                    <p>{item.speakerJobTitle}</p>
                </div>
                <div className="calendar-events-row__arrow-btn">
                    {isHovered === item.id && <ArrowRedButton
                        size="m"
                    />}
                </div>
            </div>
        </div>
    )
}

CalendarEventsRow.propTypes = {
    item: PropTypes.object
}


export default CalendarEventsRow;