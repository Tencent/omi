import { h, tag, extractClass, WeElement, OmiProps, classNames, Ref } from 'omi'
import { AvatarContextProps } from './type'
import { toArray, omit } from 'lodash'
import style from './style/index'
import Avatar from './avatar';
import { PopupProps } from '../popup';
import AvatarContextProvider from './avatar-context';
import { AvatarGroupProps } from './type';
import { StyledProps } from '../common';
import parseTNode from '../utils/parseTNode'
import { TdClassNamePrefix } from '../utils/clsx';


// const AvatarGroupClassNamePefix = (className: string) => TdClassNamePrefix('avatar-group__') + className
@tag('t-avatar-group')
export default class AvatarGroup extends WeElement<AvatarGroupProps>{
    classPrefix = 't';
    static css = style;
    static defaultProps = { cascading: 'right-up' }
    static propTypes = {
        cascading: String,
        max: Number,
        size: String,
    }
    preClass = classNames(TdClassNamePrefix('avatar'))
    childrenList = toArray(this.children);
    allChildrenList: any
    install() {
        if (this.childrenList.length > 0) {
            this.allChildrenList = this.childrenList.map((child, index) =>
                React.cloneElement(child, { key: `avatar-group-item-${index}`, ...child.props }),
            );
        }


        const groupClass = classNames(`${this.preClass}-group`, this.className, {
            [`${this.preClass}--offset-right`]: this.props.cascading === 'right-up',
            [`${this.preClass}--offset-left`]: this.props.cascading === 'left-up',
        });

        const childrenCount = this.childrenList.length;
        if (this.props.max && childrenCount > this.props.max) {
            const showList = this.allChildrenList.slice(0, this.props.max);
            const ellipsisAvatar = (
                <Avatar className={`${this.preClass}__collapse`}>{parseTNode(collapseAvatar) || `+${childrenCount - max}`}</Avatar>
            );
            showList.push(<div key="t-avatar__collapse">{ellipsisAvatar}</div>);
            return (
                <AvatarContextProvider size={this.props.size}>
                    <div className={groupClass}>{showList}</div>
                </AvatarContextProvider>
            );
        }
    }
    render(props: OmiProps<AvatarGroupProps, any>, store: any) {
        return (
            <AvatarContextProvider size={this.props.size}>
                <div className={groupClass} {...avatarGroupProps}>
                    {this.allChildrenList}
                </div>
            </AvatarContextProvider>
        );
    };
}

