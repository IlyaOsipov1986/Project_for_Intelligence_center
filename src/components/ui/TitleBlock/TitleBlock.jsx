import '../TitleBlock/TitleBlock.scss';
import EventsButton from "../../ui/EventsButton/EventsButton";
import classNames from "classnames";
import PropTypes from 'prop-types';

const TitleBlock = ({ title= '', titleBtn='', activeBtn = false, border=false, width=false, center=false }) => {
     const titleBlockClass = classNames({
        'title-block__container': true,
        'title-block__border': border,
        'title-block__width': width,
        'title-block__center': center
    });
    
    return (
        <div className={titleBlockClass}>
            <h2>{title}</h2>
            {activeBtn &&
                <EventsButton
                    title={titleBtn}
                />
            }
        </div>
    )
}

TitleBlock.propTypes = {
    title: PropTypes.string.isRequired,
    activeBtn: PropTypes.bool,
    titleBtn: PropTypes.string,
    border: PropTypes.bool,
    width: PropTypes.bool
}

export default TitleBlock;