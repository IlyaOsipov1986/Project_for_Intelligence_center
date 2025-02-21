import "./SocialNetworkIcon.scss";
import PropTypes from "prop-types";

const SocialNetworkIcon = (props) => {

    const {
        el,
        activeHover,
        isHovered,
        setIsHovered,
        index,
    } = props;

    return (
        <a href={el?.link} className="social-networks-block__icon">
            {activeHover ? (
                <img onMouseEnter={() => setIsHovered(index)}
                     onMouseLeave={() => setIsHovered(null)}
                     src={isHovered === index ? el?.imgHover : el?.img} alt=""
                />
            ) : (
                    <img src={el?.img} alt=""
                />
            )}
        </a>
    )
}

SocialNetworkIcon.propTypes = {
    el: PropTypes.object,
    activeHover: PropTypes.bool,
    link: PropTypes.string,
    isHovered: PropTypes.number,
    setIsHovered: PropTypes.func,
    index: PropTypes.number,
}

export default SocialNetworkIcon;