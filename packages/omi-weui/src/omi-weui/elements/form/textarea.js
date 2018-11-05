import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from '../../utils/classnames';

/**
 * weui wrapper for textarea
 *
 */
export default class TextArea extends Component {
    static propTypes = {
        /**
         * display word counter
         *
         */
        showCounter: PropTypes.bool,
        /**
         * max character allow for textarea
         *
         */
        maxLength: PropTypes.number,
        defaultValue: PropTypes.string,
    };

    static defaultProps = {
        showCounter: true,
        defaultValue: undefined
    };

    state = {
        textCounter: this.props.defaultValue ? this.props.defaultValue.length : 0
    };

    handleChange(e){
        this.setState({textCounter: e.target.value.length});

        //forward event to props if any
        if (this.props.onChange) this.props.onChange(e);
    }

    render(){
        const { className, children, showCounter, maxLength, onChange, ...others } = this.props;
        const cls = classNames({
            'weui-textarea': true,
            [className]: className
        });

        return (
            <div>
                <textarea
                className={cls}
                maxLength={maxLength}
                onChange={this.handleChange.bind(this)}
                {...others}>
                    {children}
                </textarea>
                {
                    showCounter ?
                    <div className="weui-textarea-counter">
                        <span>{this.state.textCounter}</span>{maxLength ? '/' + maxLength : false}
                    </div>
                    : false
                }
            </div>
        );
    }
};
