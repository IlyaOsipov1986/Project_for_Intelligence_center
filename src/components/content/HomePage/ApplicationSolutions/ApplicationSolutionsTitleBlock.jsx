import "./ApplicationSolutions.scss";
import solutionsImageTitle from "../../../../assets/img/solutionsImageTitle.png";
import EventsButton from "../../../ui/EventsButton/EventsButton.jsx";

const ApplicationSolutionsTitleBlock = () => {
    return (
        <div className="application-solutions-title-block" style={{backgroundImage: `url(${solutionsImageTitle})`}}>
            <div className="application-solutions-title-block__text">
                <h2>Прикладные Решения</h2>
                <p>Проекты, реализованные в интересах индустриальных партнеров</p>
            </div>
            <EventsButton
                title="ПАРТНЕРАМ"
            />
        </div>
    )
}
export default ApplicationSolutionsTitleBlock;