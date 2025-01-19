import TitleBlock from "../../ui/TitleBlock/TitleBlock";
import TitleTabs from "../../ui/TitleTabs/TitleTabs";
import CalendarEvents from "../../ui/CalendarEvents/CalendarEvents";
import '../CenterCalendar/CenterCalendar.scss';
import { titleTabsCalendarCentre } from "../../../config";

const CenterCalendar = () => {
    
    return (
        <div className="center-calendar__container">
            <div className="center-calendar__title">
                <div/>
                <div className="center-calendar__title-items">
                    <TitleBlock
                        title="Календарь Центра"
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