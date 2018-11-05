import React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../utils/classnames';

/**
 * Media Object, Typically use with `Panel` to display pictures and text, consists of `MediaBoxBody`, `MediaBoxDescription`, `MediaBoxHeader`
 *
 */
export default class MediaBox extends React.Component {
    static propTypes = {
        /**
         * The layout of media box, Options: appmsg/text/small_appmsg
         *
         */
        type: PropTypes.string
    };

    static defaultProps = {
        type: 'text'
    };

    render() {
        const {children, type, className, ...others} = this.props;
        const Component = this.props.href ? 'a' : 'div';
        const cls = classNames({
            'weui-media-box': true,
            'weui-media-box_appmsg': type === 'appmsg',
            'weui-media-box_text': type === 'text',
            'weui-media-box_small-appmsg': type === 'small_appmsg',
        }, className);

        return (
            <Component className={cls} {...others}>{children}</Component>
        );
    }
};
