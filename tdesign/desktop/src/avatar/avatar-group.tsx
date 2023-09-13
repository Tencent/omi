import { h, tag, extractClass, WeElement, OmiProps, classNames, Ref, cloneElement } from 'omi'
import { AvatarContextProps } from './type'
import { toArray, omit } from 'lodash'
import style from './style/index'
import Avatar from './avatar';
import { PopupProps } from '../popup';
import AvatarContext from './avatar-context';
import { AvatarGroupProps } from './type';
import { StyledProps } from '../common';
import parseTNode from '../utils/parseTNode'
import { TdClassNamePrefix } from '../utils/clsx';
import log from '@src/_common/js/log';


// const AvatarGroupClassNamePefix = (className: string) => TdClassNamePrefix('avatar-group__') + className
@tag('t-avatar-group-temp')
class AvatarGroupTemp extends WeElement {
    render(props) {
        return cloneElement(props, props)
    }
}


@tag('t-avatar-group')
export default class AvatarGroup extends WeElement<AvatarGroupProps>{
    classPrefix = 't';
    static css = style;
    static defaultProps = { cascading: 'right-up' }
    static propTypes = {
        cascading: String,
        max: Number,
        size: String,
        collapseAvatar: Object,
        children: Object
    }
    preClass = classNames(TdClassNamePrefix('avatar'))
    childrenList = toArray(this.children);
    allChildrenList: any
    render(props: OmiProps<AvatarGroupProps, any>, store: any) {


        console.log(this.childrenList.length);

        if (this.childrenList.length > 0) {

            this.allChildrenList = <a-avatar-group-temp cascading={props.cascading} max={props.max} size={props.size} collapseAvatar={props.collapseAvatar} ></a-avatar-group-temp>
            console.log(this.allChildrenList);

        }
        const groupClass = classNames(`${this.preClass}-group`, this.className, {
            [`${this.preClass}--offset-right`]: props.cascading === 'right-up',
            [`${this.preClass}--offset-left`]: props.cascading === 'left-up',
        });

        const childrenCount = this.childrenList.length;
        if (props.max && childrenCount > props.max) {
            const showList = this.allChildrenList.slice(0, props.max);
            const ellipsisAvatar = (
                <Avatar className={`${this.preClass}__collapse`}>{parseTNode(this.props.collapseAvatar) /*|| `+${childrenCount - this.props.max}`*/}</Avatar>
            );
            showList.push(<div key="t-avatar__collapse">{ellipsisAvatar}</div>);
            return (
                <div size={props.size}>
                    <div className={groupClass}>{showList}</div>
                </div>
            );
        }
        return (
            <div size={props.size}>
                <div className={groupClass} >
                    {this.allChildrenList}
                </div>
            </div>
        );
    };
}

