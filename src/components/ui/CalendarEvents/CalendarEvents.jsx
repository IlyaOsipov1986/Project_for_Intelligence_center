import "../../ui/CalendarEvents/CalendarEvents.scss";
import React from "react";
import { calendarEventsData, socialNetworksCalendarData } from "../../../config";
import CalendarEventsRow from "../CalendarEvents/CalendarEventsRow";
import SocialNetworksBlock from "../../ui/SocialNetworksBlock/SocialNetworksBlock";

const CalendarEvents = () => {
    
    return (
        <div className="calendar-events__container">
            <div className="calendar-events__content">
                {calendarEventsData && calendarEventsData.length > 0 ? 
                    (
                        <>
                        {calendarEventsData.map((el) => {
                             return (
                                <React.Fragment key={el.id}>
                                    <CalendarEventsRow
                                        item={el}
                                    />
                                </React.Fragment>
                                )
                            })}
                        </>
                    )
                    :
                    (
                        <div>
                            События не найдены!
                        </div>
                    )
                }
                <SocialNetworksBlock
                    activeBtn={true}
                    titleEventBtn="ВСЕ СОБЫТИЯ"
                    socialData={socialNetworksCalendarData}
                />
            </div>
            <div className="calendar-events__empty-block">
                <div/>
                <div/>
            </div>
        </div>
    )
}
export default CalendarEvents;