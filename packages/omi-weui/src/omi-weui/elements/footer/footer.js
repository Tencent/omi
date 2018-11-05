import React from 'react';
import classNames from '../../utils/classnames';

/**
 * consists of `footer_links`, `footer_link` and `footer_text`
 *
 */
const Footer = (props) => {
    const { className, children, ...others } = props;
    const cls = classNames({
        'weui-footer': true,
        [className]: className
    });

    return (
        <div className={cls} {...others}>
            {children}
        </div>
    );
};

export default Footer;