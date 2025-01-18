import "../AboutCentre/AboutCentre.scss";
import TitleBlock from "../../ui/TitleBlock/TitleBlock";
import EventsButton from "../../ui/EventsButton/EventsButton";

const AboutCentre = () => {
    return (
        <div className="about-centre__container">
            <div className="about-centre__title-wrap">
                <TitleBlock
                    title="О Цетре"
                    width={true}
                />
                <div className="about-centre__title-event-btn">
                    <EventsButton
                        title="О НАС"
                    />
                </div>
            </div>
            <div>
                1
            </div>
            <div className="about-centre__empty-block">
                <div/>
                <div/>
            </div>
        </div>
    )
}
export default AboutCentre;