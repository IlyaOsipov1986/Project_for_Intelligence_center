import TitleBlock from "../../ui/TitleBlock/TitleBlock";
import TitleTabs from "../../ui/TitleTabs/TitleTabs";
import '../CenterCalendar/CenterCalendar.scss';
import {tileTabsCalendarCentre} from "../../../config";

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
                            tabs={tileTabsCalendarCentre}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CenterCalendar;