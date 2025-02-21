import { useState } from "react";
import ArrowRedButton from "../ArrowRedButton/ArrowRedButton";
import "../CalendarEvents/CalendarEvents.scss";
import emptyImage from '../../../assets/img/teamEmptyImage.png';
import PropTypes from 'prop-types';
import classNames from "classnames";
import {findIsLastElement} from "../../../utils/utils.js";
// import redSqureFill from "../../../assets/img/icons/redSqureFill.svg";
// import redSqureEmpty from "../../../assets/img/icons/redSqureEmpty.svg";

const CalendarEventsRow = ({ item, calendarEventsDataLength, dataEvents }) => {

    const calendarEventsRowClass = classNames({
        'calendar-events-row__container': true,
        'calendar-events-row__last-child' : calendarEventsDataLength === 1 || findIsLastElement(dataEvents, item.index),
    });

    const [isHovered, setIsHovered] = useState(null);

    return (
        <div className='calendar-events-row__wrap'>
            <div className="calendar-events-row__date">
                {item.date}
                <span className="calendar-events-row__date-time">{item.time}</span>
            </div>
            <div className={calendarEventsRowClass}
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
    item: PropTypes.object,
    calendarEventsDataLength: PropTypes.number,
    dataEvents: PropTypes.array,
}


export default CalendarEventsRow;