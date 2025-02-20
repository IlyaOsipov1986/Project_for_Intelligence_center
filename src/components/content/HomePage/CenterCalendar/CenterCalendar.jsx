import TitleBlock from "../../../ui/TitleBlock/TitleBlock.jsx";
import TitleTabs from "../../../ui/TitleTabs/TitleTabs.jsx";
import CalendarEvents from "../../../ui/CalendarEvents/CalendarEvents.jsx";
import './CenterCalendar.scss';
import { titleTabsCalendarCentre } from "../../../../config.js";

const CenterCalendar = () => {
    
    return (
        <div className="center-calendar__container">
            <div className="center-calendar__title">
                <div/>
                <div className="center-calendar__title-items">
                    <TitleBlock
                        title="Мероприятия"
                    />
                    <div className="center-calendar__title-tabs">
                        <TitleTabs
                            tabs={ titleTabsCalendarCentre }
                        />
                    </div>
                </div>
            </div>
            <CalendarEvents/>
        </div>
    )
}
export default CenterCalendar;