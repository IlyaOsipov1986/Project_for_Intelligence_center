import '../TitleTabs/TitleTabs.scss';
import PropTypes from 'prop-types';

const TitleTabs = ({tabs=[]}) => {

    return (
        <div className='title-tabs__container'>
            {tabs.map((el, i) => {
                return (
                    <div key={i} className='title-tabs__item'>
                        {el.name}
                    </div>
                )
            })}
        </div>
    )
}

TitleTabs.propTypes = {
    tabs: PropTypes.array
}

export default TitleTabs;