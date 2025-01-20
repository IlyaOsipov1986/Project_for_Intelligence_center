import "../Team/Team.scss";
import React from "react";
import Container from "../../layout/Container/Container";
import Divaider from "../../ui/Divaider/Divaider";
import TitleBlock from "../../ui/TitleBlock/TitleBlock";
import TeamPersonCard from "../Team/TeamPersonCard";
import RowLeftRightButtons from "../../ui/RowLeftRightButtons/RowLeftRightButtons";
import { teamPersonCardsData } from "../../../config";

const Team = () => {

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
                    <RowLeftRightButtons/>
                </div>  
            </Container>
            <Divaider/>
            <Container>
                <div className="team__card-wrap">
                    {teamPersonCardsData.map((el) => {
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