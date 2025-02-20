import "./Team.scss";
import React from "react";
import Container from "../../../layout/Container/Container.jsx";
import Divaider from "../../../ui/Divaider/Divaider.jsx";
import TitleBlock from "../../../ui/TitleBlock/TitleBlock.jsx";
import TeamPersonCard from "./TeamPersonCard.jsx";
import RowLeftRightButtons from "../../../ui/RowLeftRightButtons/RowLeftRightButtons.jsx";
import { teamPersonCardsData } from "../../../../config.js";
import useCardsCarousel from "../../../../utils/hooks/useCardsCarousel.js";

const Team = () => {

    const { visibleCards, nextGroup, prevGroup } = useCardsCarousel(teamPersonCardsData, 4);

    return (
        <>
            <Container>
                <div className="team__empty-block">
                   <div className="team__empty-block-item">
                        <TitleBlock
                            title="Команда"
                            border={true}
                            width={true}
                            center={true}
                        />
                    </div>
                   <div className="team__empty-block-item"/>
                   <div className="team__empty-block-item"/>
                </div>
            </Container>
            <Divaider/>
            <Container>
                <div className="team__row-btns">
                    {teamPersonCardsData?.length >= 4 && <RowLeftRightButtons
                        nextGroup={nextGroup}
                        prevGroup={prevGroup}
                    />}
                </div>  
            </Container>
            <Divaider/>
            <Container>
                <div className="team__card-wrap">
                    {visibleCards.map((el) => {
                        return (
                            <React.Fragment key={el.id}>
                                <TeamPersonCard
                                    item={el}
                                />
                            </React.Fragment>
                        )
                    })}
                </div>
            </Container>
        </>
    )
}
export default Team;