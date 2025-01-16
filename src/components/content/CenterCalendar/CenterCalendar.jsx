import TitleBlock from "../../ui/TitleBlock/TitleBlock";
import '../CenterCalendar/CenterCalendar.scss';

const CenterCalendar = () => {
    
    return (
        <div className="center-calendar__container">
            <div className='center-calendar__title'>
                <TitleBlock
                    title="Календарь центра"
                />
                <div>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                </div>
            </div>
        </div>
    )
}
export default CenterCalendar;