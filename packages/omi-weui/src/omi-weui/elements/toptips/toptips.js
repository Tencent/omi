import React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../utils/classnames';
import './toptips.less';

/**
 *  Drop down message from top
 *
 */
const Toptips = (props) => {
    const {className, type, children, show, ...others} = props;
    const cls = classNames({
        'weui-toptips': true,
        [`weui-toptips_${type}`]: true,
        [className]: className
    });

    return (
        <div className={cls} {...others} style={{display: show ? 'block' : 'none'}}>
            {children}
        </div>
    );
};

Toptips.propTypes = {
    /**
     * display tips
     *
     */
    show: PropTypes.bool,
    /**
     * type: `default`, `warn`, `info`, `primary`
     */
    type: PropTypes.string
};

Toptips.defaultProps = {
    show: false,
    type: 'default'
};

export default Toptips;
