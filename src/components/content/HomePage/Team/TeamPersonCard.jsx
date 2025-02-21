import "./Team.scss";
import imgPersonEmpty from "../../../../assets/img/teamEmptyImage.png";
import { useState } from "react";
import PropTypes from 'prop-types';

const TeamPersonCard = ({item}) => {

    const [isHovered, setIsHovered] = useState(null);

    return (
        <div className="team-person-card" 
            onMouseEnter={() => setIsHovered(item.id)}
            onMouseLeave={() => setIsHovered(null)}
        >
            {item.imgPerson ? (
                <img src={isHovered === item.id ? item.imgPersonHover : item.imgPerson} alt=""/>
            ) : (
                <img src={imgPersonEmpty} alt=""/>
            )}
            <h6>{item.name}</h6>
            <p>{item.position}</p>
        </div>
    )
}

TeamPersonCard.propTypes = {
    item: PropTypes.object,
}

export default TeamPersonCard;