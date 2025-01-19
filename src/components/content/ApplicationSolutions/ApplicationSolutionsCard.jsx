import "../ApplicationSolutions/ApplicationSolutions.scss";
import classNames from "classnames";

const ApplicationSolutionsCard = ({item, addClass=''}) => {

    const cardClass = classNames({
        'application-solutions-card__text': true,
        [`${addClass}`]: addClass,
      });

    return (
        <div className='application-solutions-card'>
            <img src={item.bgImage} alt=""/>
            <div className={cardClass}>
                <p>{item.textCard}</p>
            </div>
        </div>
    )
}
export default ApplicationSolutionsCard;