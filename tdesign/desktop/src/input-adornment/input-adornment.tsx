import { h, tag, WeElement, OmiProps, classNames, cloneElement } from 'omi'
import { InputAdornmentProps } from './type'
import css from './style/index'
import Button from '../button';
import { StyledProps } from '../common';
import isString from 'lodash/isString';
import isNumber from 'lodash/isNumber';
import '../input'

@tag('t-input-adornment')
export default class InputAdornment extends WeElement<InputAdornmentProps>{
    static css = css as string;
    static defaultProps = {}
    static propType = {
        append: Object,
        prepend: Object,

    }
    render(props: OmiProps<InputAdornmentProps>) {

        const classPrefix = 't';

        const renderAddon = (type: string, classPrefix: string, Content: string | number | boolean | object) => {
            if (typeof Content === 'undefined') return null;

            let addonNode;
            const isContentNode = isString(Content) || isNumber(Content);

            if (typeof Content === 'function') {
                addonNode = <Content />;
            } else {
                addonNode = isContentNode ? <span className={`${classPrefix}-input-adornment__text`}>{Content}</span> : Content;
            }

            return addonNode ? <span className={`${classPrefix}-input-adornment__${type}`}>{addonNode}</span> : addonNode;
        };
        function renderChildren() {

        }

        // const renderChildren = () =>
        //     React.Children.map(children, (child) => {
        //         if (!child) return null;
        //         if (React.isValidElement(child)) {
        //             return React.cloneElement(child, {
        //                 ...wrapperProps,
        //                 ...child.props,
        //                 onChange: (...args) => {
        //                     // @ts-ignore
        //                     wrapperProps?.onChange?.call?.(null, ...args);
        //                     child.props?.onChange?.call?.(null, ...args);
        //                 },
        //             });
        //         }
        //         return child;
        //     });

        return (
            <div ref={props.ref} style={props.style} className={classNames(`${classPrefix}-input-adornment`, props.className)}>
                {renderAddon('prepend', classPrefix, this.prepend)}
                {/* {renderChildren()} */}
                <t-input status="successs" tips="" align="left" size="large" style={{ width: 400 }} />
                {renderAddon('append', classPrefix, this.append)}
            </div>
        );
    };
}

