import "../ApplicationSolutions/ApplicationSolutions.scss";
import React from "react";
import ApplicationSolutionsTitleBlock from "../ApplicationSolutions/ApplicationSolutionsTitleBlock";
import ApplicationSolutionsCard from "../ApplicationSolutions/ApplicationSolutionsCard";
import { applicationSolutionsDataCard } from "../../../config";

const ApplicationSolutions = () => {
    return (
        <div className="application-solutions__container">
            <ApplicationSolutionsTitleBlock/>
            {applicationSolutionsDataCard.map((el) => {
                return (
                    <React.Fragment key={el.id}>
                         <ApplicationSolutionsCard
                            item={el}
                            addClass={el.bgColorCard}
                         />
                    </React.Fragment>
                )
            })}
            <div className="application-solutions__empty-item-1"/>
            <div className="application-solutions__empty-item-2"/>
        </div>
    )
}
export default ApplicationSolutions;