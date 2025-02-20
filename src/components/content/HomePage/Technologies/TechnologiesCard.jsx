import "./Technologies.scss";
import PropTypes from 'prop-types';

const TechnologiesCard = ({item}) => {

    return (
        <div className="technologies-card" style={{backgroundImage: `url(${item.bgImage})`}}>
            <p className="technologies-card-title">
                {item?.title}
            </p>
        </div>
    )
}

TechnologiesCard.propTypes = {
    item: PropTypes.object,
}

export default TechnologiesCard;