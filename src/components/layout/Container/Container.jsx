import '../Container/Container.scss';
import classNames from "classnames";
import PropTypes from 'prop-types';

const Container = ({ children, addClass = "" }) => {
    const containerClass = classNames({
        container: true,
        [`${addClass}`]: addClass,
    });
    return <div className={containerClass}>{children}</div>;
};

Container.propTypes = {
    children: PropTypes.node.isRequired,
    addClass: PropTypes.string
}
  
export default Container;