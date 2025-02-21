import "../../ui/CalendarEvents/CalendarEvents.scss";
import React from "react";
import { calendarEventsData, socialNetworksCalendarData } from "../../../config";
import CalendarEventsRow from "../CalendarEvents/CalendarEventsRow";
import SocialNetworksBlock from "../../ui/SocialNetworksBlock/SocialNetworksBlock";
import useFetchEvents from "../../../utils/fetchers/useFetchEvents.js";

const CalendarEvents = () => {

    const { dataEvents } = useFetchEvents();
    const calendarEventsDataLength = dataEvents.length;

    return (
        <div className="calendar-events__container">
            <div className="calendar-events__content">
                {dataEvents && calendarEventsDataLength > 0 ?
                    (
                        <>
                        {dataEvents.map((el ,index) => {
                             return (
                                <React.Fragment key={el.id}>
                                    <CalendarEventsRow
                                        item={{...el, index: index}}
                                        calendarEventsDataLength={calendarEventsDataLength}
                                        dataEvents={calendarEventsData}
                                    />
                                </React.Fragment>
                                )
                            })}
                        </>
                    )
                    :
                    (
                        <div className="calendar-events__no-found">
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