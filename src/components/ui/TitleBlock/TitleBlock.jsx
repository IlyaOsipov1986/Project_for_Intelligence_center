import '../TitleBlock/TitleBlock.scss';
import EventsButton from "../../ui/EventsButton/EventsButton";
import classNames from "classnames";
import PropTypes from 'prop-types';

const TitleBlock = ({ title= '', titleBtn='', activeBtn = false, left='ss', rigth='dd', border=true  }) => {
     const titleBlockClass = classNames({
        'title-block__container': true,
        [`title-block__border-${left}`]: border,
        [`title-block__border-${rigth}`]: border,
        // [`title-block__border-${left}-${rigth}`]: border,
        // [`title-block__border-${left}-${rigth}`]: border,
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
    left: PropTypes.string,
    border: PropTypes.bool
}

export default TitleBlock;