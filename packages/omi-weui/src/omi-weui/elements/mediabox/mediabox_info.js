import React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../utils/classnames';
import MediaBoxInfoMeta from './mediabox_info_meta';

/**
 * Info Items for MediaBox
 *
 */
export default class MediaBoxInfo extends React.Component {
    static propTypes = {
        /**
         * automatically include Metas, object array of metas, property required: `extra`, `label`
         *
         */
        data: PropTypes.array,
    };

    static defaultProps = {
        data: [],
    };

    renderData(metas) {
        return metas.map((meta, i) => {
            return <MediaBoxInfoMeta key={i} extra={meta.extra}>{meta.label}</MediaBoxInfoMeta>;
        });
    }

    render() {
        const {children, data, className, ...others} = this.props;
        const cls = classNames({
            'weui-media-box__info': true
        }, className);

        return (
            <ul className={cls} {...others}>
                {data.length > 0 ? this.renderData(data) : children}
            </ul>
        );
    }
};
