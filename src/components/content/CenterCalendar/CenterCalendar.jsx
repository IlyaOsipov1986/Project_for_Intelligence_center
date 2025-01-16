import TitleBlock from "../../ui/TitleBlock/TitleBlock";
import '../CenterCalendar/CenterCalendar.scss';

const CenterCalendar = () => {
    
    return (
        <div className="center-calendar__container">
            <div>
                <TitleBlock
                    title="Календарь центра"
                    titleBtn="Все статьи"
                    activeBtn={true}
                />
            </div>
        </div>
    )
}
export default CenterCalendar;