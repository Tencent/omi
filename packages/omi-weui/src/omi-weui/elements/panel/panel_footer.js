import React from 'react';
import classNames from '../../utils/classnames';

/**
 * Footer of Panel
 *
 */
export default class PanelFooter extends React.Component {
    render() {
        const {className, children, ...others} = this.props;
        const Component = this.props.href ? 'a' : 'div';
        const cls = classNames({
            'weui-panel__ft': true,
            [className]: className
        });

        return (
            <Component className={cls} {...others}>{children}</Component>
        );
    }
};
