import "../AboutCentre/AboutCentre.scss";
import { useState } from "react";
import TitleBlock from "../../ui/TitleBlock/TitleBlock";
import EventsButton from "../../ui/EventsButton/EventsButton";
import { aboutCentreItemsTextIcon } from "../../../config";

const AboutCentre = () => {

    const [isHovered, setIsHovered] = useState(null);

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
            <div className="about-centre__information-wrap">
                <div className="about-centre__information-first">
                    <div className="about-centre__information-first__item">
                        Наша миссия — сделать Интернет вещей интеллектуальным
                    </div>
                    <div className="about-centre__information-first__item">
                        Работаем над расширением взаимодействия СПбГУ в области искусственного интеллекта и науки о данных с российскими  и зарубежными академическими и индустриальными партнерами.
                    </div>
                </div>
                <div className="about-centre__information-second">
                    {aboutCentreItemsTextIcon.map((el, i) => {
                        return (
                            <div key={i}
                                className="about-centre__information-second__item"
                                onMouseEnter={() => setIsHovered(i)}
                                onMouseLeave={() => setIsHovered(null)}
                            >
                                <div className="about-centre__information-second__img">
                                    <img src={isHovered === i ? el.iconHover : el.icon} alt=""/>
                                </div> 
                                <p>{el.text}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="about-centre__empty-block">
                <div/>
                <div/>
            </div>
        </div>
    )
}
export default AboutCentre;