import {h, OmiProps, tag, WeElement, classNames, createRef} from 'omi'
import { BadgeProps } from './type'
import { TdClassNamePefix } from '@src/utils'
import css from './style/index'

@tag('t-badge')
export default class Badge extends WeElement<BadgeProps> {
    static css = css as string

    static defalutProps = {
        count: 0,
        dot: false,
        maxCount: 99,
        shape: 'circle',
        showZero: 'false',
        size: 'medium'
    }
    static propTypes = {
        color: String,
        content: Object,
        count: Object,
        default: Object,
        dot: Boolean,
        maxCount: Number,
        offset: Array<string | number>,
        shape: String,
        showZero: Boolean,
        size: String
    }

    render(props: OmiProps<BadgeProps, any>, store: any){

        const classPrefix = 't'
        const childNode = props.content || props.children
        const badgeClassName = classNames(
            !childNode && `${classPrefix}-badge--static`,
            props.dot ? `${classPrefix}-badge--dot` : `${classPrefix}-badge--${props.shape}`,
            props.size === 'small' && `${classPrefix}-size-s`,
            !childNode
        );

        const getDisplayCount = () => {
            if (typeof props.count === 'number' && props.count > props.maxCount) {
                return `${props.maxCount}+`;
            }
            return props.count;
        };

        let isHidden = !props.count;
        if (typeof props.count === 'number') {
            isHidden = props.count < 1 && !props.showZero;
        }

        const getStyle = () => {
            const mergedStyle = {...this.style}
            if (props.color) {
                mergedStyle.backgroundColor = props.color;
            }
            if (props.offset) {
                if (props.offset[0]) {
                    mergedStyle.right = String(+props.offset[0]);
                }
                if (props.offset[1]) {
                    mergedStyle.marginTop = String(+props.offset[1]);
                }
            }
            return mergedStyle;
        };

        const badge = !isHidden ? (
            <span  class={badgeClassName} style={getStyle()}>
                {!props.dot ? getDisplayCount() : null}
            </span>
        ) : null;

        if (!childNode) {
            return badge;
        }

        let ref = createRef()
        return (
            <span class={classNames(TdClassNamePefix('badge'))} ref={ref}>
                {childNode}
                {badge}
            </span>
        );
    };
}