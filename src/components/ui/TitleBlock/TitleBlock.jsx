import '../TitleBlock/TitleBlock.scss';
import EventsButton from "../../ui/EventsButton/EventsButton";
import classNames from "classnames";
import PropTypes from 'prop-types';
import ArrowRedButton from "../ArrowRedButton/ArrowRedButton.jsx";

const TitleBlock = (props) => {

    const {
        title= '',
        titleBtn='',
        activeBtn = false,
        activeArrowBtn = false,
        linkUrl = '',
        border=false,
        width=false,
        center=false
    } = props;

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
                    linkUrl={linkUrl}
                />
            }
            {activeArrowBtn &&
                <ArrowRedButton
                    size='s'
                    linkUrl={linkUrl}
                />
            }
        </div>
    )
}

TitleBlock.propTypes = {
    title: PropTypes.string.isRequired,
    activeBtn: PropTypes.bool,
    activeArrowBtn: PropTypes.bool,
    linkUrl: PropTypes.string,
    titleBtn: PropTypes.string,
    border: PropTypes.bool,
    width: PropTypes.bool,
    center: PropTypes.bool,
}

export default TitleBlock;