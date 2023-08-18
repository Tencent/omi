import { h, tag, extractClass, WeElement, OmiProps, classNames, Ref } from 'omi'
import { AvatarProps } from './type'
import parseTNode from '../utils/parseTNode'
import css from './style/index'
import { StyledProps } from '../common';
import { size } from 'lodash';
// import AvatarContext from './AvatarContext';
// import AvatarGroup from './AvatarGroup';
// import Image, { ImageProps } from '../image';

@tag('t-avatar')
export default class Avatar extends WeElement<AvatarProps>{
    static css = css as string;
    static defaultProps = { size: 'medium' }
    static propsType = {
        alt: String,
        hideOnLoadFailed: Boolean,
        icon: Object,
        image: String,
        shape: String,
        // size: avatarSize,
        size: String,
        onError: Function,
        children: Object,
        content: Object,
        style: Object,
        // imageProps,
    }
    render(props: OmiProps<AvatarProps>) {
        const groupSize = ' ';
        const classPrefix = 't';
        const [scale] = [1];
        const [isImgExist, setIsImgExist] = [true, true];
        // const avatarRef =useRef<HTMLElement>(null);
        // const avatarChildrenRef = useRef<HTMLElement>(null);
        // const size = avatarSize === undefined ? groupSize : avatarSize;
        // const gap = 4;
        // const handleScale = () => {
        //     if (!avatarChildrenRef.current || !avatarRef.current) {
        //         return;
        //     }
        //     const childrenWidth = avatarChildrenRef.current.offsetWidth;
        //     const avatarWidth = avatarRef.current.offsetWidth;

        //     if (childrenWidth !== 0 && avatarWidth !== 0) {
        //         if (gap * 2 < avatarWidth) {
        //             setScale(avatarWidth - gap * 2 < childrenWidth ? (avatarWidth - gap * 2) / childrenWidth : 1);
        //         }
        //     }
        // };
        // new ResizeObserver(avatarChildrenRef.current);

        // const handleImgLoadError: ImageProps['onError'] = (ctx) => {
        //     onError?.(ctx);
        //     !hideOnLoadFailed && setIsImgExist(false);
        // };

        // useEffect(() => {
        //     setIsImgExist(true);
        //     setScale(1);
        // }, [image]);

        // useEffect(() => {
        //     handleScale();
        // }, []);
        // const numSizeStyle: React.CSSProperties =
        //     size && !SIZE[size]
        //         ? {
        //             width: size,
        //             height: size,
        //             fontSize: `${Number.parseInt(size, 10) / 2}px`,
        //         }
        //         : {};
        // const imageStyle: React.CSSProperties =
        //     size && !SIZE[size]
        //         ? {
        //             width: size,
        //             height: size,
        //         }
        //         : {};

        const preClass = `${classPrefix}-avatar`;
        const avatarClass = classNames(preClass, this.className, {
            // [[props.size]]: !![props.size],
            [`${preClass}--${props.shape}`]: !!props.shape,
            [`${preClass}__icon`]: !!props.icon,
        });
        let renderChildren;
        if (props.image && isImgExist) {
            // renderChildren = <Image src={image} alt={alt} style={imageStyle} onError={handleImgLoadError} {...imageProps} />;
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
                // ref={composeRefs(ref, avatarRef) as any}
                className={avatarClass}
            // style={{ ...numSizeStyle, ...style }}
            // {...avatarProps}
            >
                {renderChildren}
            </div>
        )
    }
}


