import { useState } from "react";
import ArrowButton from "../ArrowButton/ArrowButton";
import "../CalendarEvents/CalendarEvents.scss";
import PropTypes from 'prop-types';
import redSqureFill from "../../../assets/img/icons/redSqureFill.svg";
import redSqureEmpty from "../../../assets/img/icons/redSqureEmpty.svg";

const CalendarEventsRow = ({item}) => {

    const [isHovered, setIsHovered] = useState(null);

    return (
        <>
            <div className="calendar-events-row__container" 
                onMouseEnter={() => setIsHovered(item.id)}
                onMouseLeave={() => setIsHovered(null)}
            >
                <div className="calendar-events-row__date">
                    {item.date}
                    <img className="calendar-events-row__date-icon" 
                        src={isHovered === item.id ? redSqureFill : redSqureEmpty} alt=""
                    />
                </div>
                <div className="calendar-events-row__title">
                    <h6>{item.title}</h6>
                    <p>Спикер: {item.speaker}</p>
                </div>
                <div className="calendar-events-row__arrow-btn">
                    {isHovered === item.id && <ArrowButton
                        size="m"
                    />}
                </div>
            </div>
        </>
    )
}

CalendarEventsRow.propTypes = {
    item: PropTypes.object
}


export default CalendarEventsRow;