//1.0.0 components

import React from 'react';
import classNames from '../../utils/classnames';

/**
 * Footer of Preview, consists of actions
 *
 */
const PreviewFooter = (props) => {

    const { className, children, ...others } = props;
    const cls = classNames({
        'weui-form-preview__ft': true,
        [className]: className
    });

    return (
        <div className={cls} {...others}>
            { children }
        </div>
    );
};

export default PreviewFooter;