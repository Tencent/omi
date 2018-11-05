import React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../utils/classnames';
import Icon from '../icon';

/**
 * Loadmore Indicators.
 *
 */
const LoadMore = (props) => {

    const { className, children, loading, showLine, showDot, ...others } = props;
    const cls = classNames({
        'weui-loadmore': true,
        'weui-loadmore_line': showLine,
        'weui-loadmore_dot': showDot,
        [className]: className
    });

    return (
        <div className={cls} {...others}>
            { loading ? <Icon value='loading' /> : false }
            <span className="weui-loadmore__tips">
            { children }
            </span>
        </div>
    );
};

LoadMore.propTypes = {
    /**
     * display laoding spinner
     *
     */
    loading: PropTypes.bool,
    /**
     * display side lines
     *
     */
    showLine: PropTypes.bool,
    /**
     * display dot in the center
     *
     */
    showDot: PropTypes.bool
};

LoadMore.defaultProps = {
    loading: false,
    showLine: false,
    showDot: false
};

export default LoadMore;
