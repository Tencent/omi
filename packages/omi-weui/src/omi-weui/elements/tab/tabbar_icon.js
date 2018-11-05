import React from 'react';
import classNames from '../../utils/classnames';

/**
 *  Icon wrapper for icon use in TabBar
 *
 */
export default class TabBarIcon extends React.Component {

    render() {

        const {children, className, ...others} = this.props;
        const cls = classNames({
            'weui-tabbar__icon': true,
        }, className);

        return (
            <div className={cls} {...others}>
                {children}
            </div>
        );
    }
}