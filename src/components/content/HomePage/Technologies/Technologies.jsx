import Container from "../../../layout/Container/Container";
import React from "react";
import "../Technologies/Technologies.scss";
import TitleBlock from "../../../ui/TitleBlock/TitleBlock.jsx";
import {technologiesCardData} from "../../../../config.js";
import TechnologiesCard from "./TechnologiesCard.jsx";

const Technologies = () => {
    return (
        <>
            <Container>
                <div className="technologies-container">
                    <div className="technologies-empty-1"/>
                    <div className="technologies-empty-2"/>
                    <TitleBlock
                        title="Технологии"
                        border={true}
                        activeArrowBtn={true}
                    />
                    <div className="technologies-empty-3"/>
                    <div className="technologies-cards-wrap">
                        {technologiesCardData.map((item) => {
                            return (
                                <React.Fragment key={item.id}>
                                    <TechnologiesCard
                                        item={item}
                                    />
                                </React.Fragment>
                            )
                        })}
                    </div>
                </div>
            </Container>
        </>
    )
}
export default Technologies;