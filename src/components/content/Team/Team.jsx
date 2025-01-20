import "../Team/Team.scss";
import Container from "../../layout/Container/Container";
import Divaider from "../../ui/Divaider/Divaider";
import TitleBlock from "../../ui/TitleBlock/TitleBlock";
import RowLeftRightButtons from "../../ui/RowLeftRightButtons/RowLeftRightButtons";

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
                    
                </div>
            </Container>
        </>
    )
}
export default Team;