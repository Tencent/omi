import React from 'react';
import classNames from '../../utils/classnames';

/**
 *  wrapper for navbar
 *
 */
export default class NavBar extends React.Component {

    render() {

        const {children, className, ...others} = this.props;
        const cls = classNames({
            'weui-navbar': true
        }, className);

        return (
            <div className={cls} {...others}>
                {children}
            </div>
        );
    }
}