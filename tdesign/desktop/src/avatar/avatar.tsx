import { h, tag, extractClass, WeElement, OmiProps, classNames, Ref } from 'omi'
import { AvatarProps } from './type'
import parseTNode from '../utils/parseTNode'
import css from './style/index'
import { StyledProps } from '../common'
import AvatarContext from './avatar-context'
import AvatarGroup from './avatar-group'
// import Image, { ImageProps } from '../image';

@tag('t-avatar')
export default class Avatar extends WeElement<AvatarProps> {
    static css = css as string
    static defaultProps = { hideOnLoadFailed: false, shape: 'circle' }
    static propsType = {
        alt: String,
        hideOnLoadFailed: Boolean,
        icon: Object,
        image: String,
        shape: String,
        size: String,
        onError: Function,
        children: Object,
        content: Object,
        style: Object,
        imageProps: Object,
    }
    render(props: OmiProps<AvatarProps, any>, store: any) {
        const groupSize = ''

        const classPrefix = 't'
        let scale = 1
        const isImgExist = true
        let avatarRef: any
        let avatarChildrenRef: { current: { offsetWidth: any } }
        const gap = 4
        const handleScale = () => {
            if (!avatarChildrenRef.current || !avatarRef.current) {
                return
            }
            const childrenWidth = avatarChildrenRef.current.offsetWidth
            const avatarWidth = avatarRef.current.offsetWidth

            if (childrenWidth !== 0 && avatarWidth !== 0) {
                if (gap * 2 < avatarWidth) {
                    scale = avatarWidth - gap * 2 < childrenWidth ? (avatarWidth - gap * 2) / childrenWidth : 1;
                }
            }
        };


        const SIZE = {
            default: String,
            xs: String,
            small: String,
            medium: String,
            large: String,
            xl: String,
            block: String
        }
        const numSizeStyle =
            props.size && !SIZE[props.size]
                ? {
                    width: props.size,
                    height: props.size,
                    fontSize: `${Number.parseInt(props.size, 10) / 2}px`,
                }
                : {};
        const imageStyle =
            props.size && !SIZE[props.size]
                ? {
                    width: props.size,
                    height: props.size,
                }
                : {};
        const preClass = `${classPrefix}-avatar`;

        const avatarClass = classNames(preClass, this.className, {
            [SIZE[props.size]]: !!SIZE[props.size],
            [`${preClass}--${props.shape}`]: !!props.shape,
            [`${preClass}__icon`]: !!props.icon,
        });
        let renderChildren: string | number | boolean | object
        if (props.image && isImgExist) {
            renderChildren = (<img src={props.image} alt={props.alt} style={imageStyle} />);

        } else if (props.icon) {
            renderChildren = props.icon;
        } else {
            const childrenStyle = {
                transform: `scale(${scale})`,
            };
            renderChildren = (
                <span style={childrenStyle}>
                    {props.children || props.content}
                </span>
            );
        }
        return (
            <div
                ref={props.ref}
                className={avatarClass}
                style={props.style, numSizeStyle}

            >
                {renderChildren}
            </div>
        );
    };

}
