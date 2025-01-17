import { useState } from "react";
import ArrowButton from "../ArrowButton/ArrowButton";
import "../CalendarEvents/CalendarEvents.scss";
import PropTypes from 'prop-types';

const CalendarEventsRow = ({item, lengthData}) => {

    const [isHovered, setIsHovered] = useState(null);

    return (
        <>
            {lengthData === 1 ? (
                <div>
                    dsd
                </div>
            ) : (
                <div className="calendar-events-row__container" 
                    // onMouseEnter={() => setIsHovered(item.id)}
                    // onMouseLeave={() => setIsHovered(null)}
                >
                    <div>
                        {item.date}
                    </div>
                    <div>
                        {item.title}
                    </div>
                    {true && <ArrowButton/>}
                </div>
                )
            } 
        </>
    )
}

CalendarEventsRow.propTypes = {
    item: PropTypes.object,
    lengthData: PropTypes.number,
    isHovered: PropTypes.number
}


export default CalendarEventsRow;