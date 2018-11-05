import React from 'react';
import classNames from '../../utils/classnames';

/**
 * weui wrapper for radio
 *
 */
const Radio = (props) => {
    const { className, ...others } = props;
    const cls = classNames({
        'weui-check': true,
        [className]: className
    });

    return (
        <div>
            <input className={cls} type="radio" {...others}/>
            <span className="weui-icon-checked"></span>
        </div>
    );
};

export default Radio;