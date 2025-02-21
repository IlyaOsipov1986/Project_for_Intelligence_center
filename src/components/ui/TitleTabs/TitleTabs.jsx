import '../TitleTabs/TitleTabs.scss';
import {useState} from "react";
import PropTypes from 'prop-types';

const TitleTabs = ({tabs=[]}) => {

    const [activeTab, setActiveTab] = useState('ВСЕ');

    const onHandlerTabClick = (nameTab) => { setActiveTab(nameTab) }

    return (
        <div className='title-tabs__container'>
            {tabs.map((el, i) => {
                return (
                    <button key={i} onClick={() => onHandlerTabClick(el.name)} className={`title-tabs__item ${el.name === activeTab ? 'active' : ''}`}>
                        {el.name}
                    </button>
                )
            })}
        </div>
    )
}

TitleTabs.propTypes = {
    tabs: PropTypes.array
}

export default TitleTabs;