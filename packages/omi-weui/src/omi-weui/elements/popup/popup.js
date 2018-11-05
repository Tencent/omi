import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from '../../utils/classnames';
import Mask from '../mask/index';
import './popup.less';

/**
 *  An Popup modal from bottom
 *
 */
class Popup extends Component {
    static propTypes = {
        /**
         * display the component
         *
         */
        show: PropTypes.bool,
        /**
         * show mask
         *
         */
        enableMask: PropTypes.bool
    };

    static defaultProps = {
        show: false,
        enableMask: false
    }

    render() {
        const { className, children, show, onRequestClose, enableMask, ...others } = this.props;
        const cls = classNames('weui-popup', {
            'weui-popup_toggle': show
        }, className);

        return (
            <div>
                <Mask transparent={enableMask} style={{display: show ? 'block' : 'none'}} onClick={onRequestClose} />
                <div className={cls} {...others} >
                    { children }
                </div>
            </div>
        );
    }
}

export default Popup;
