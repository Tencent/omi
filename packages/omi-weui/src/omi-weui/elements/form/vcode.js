import React from 'react';
import classNames from '../../utils/classnames';

/**
 * image wrapper for vcode
 *
 */
const VCode = (props) => {
    const { className, ...others } = props;
    const cls = classNames({
        'weui-vcode-img': true,
        [className]: className
    });

    return (
        <div>
            <img className={cls} {...others}/>
        </div>
    );
};

export default VCode;