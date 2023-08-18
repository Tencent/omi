import { h, tag, WeElement } from 'omi'

import '../index'
// const { Group: AvatarGroup } = Avatar;

@tag('avatar-group-max')
export default class AvatarGroupMax extends WeElement {
    static css = 't-avatar{}'
    render() {
        return (
            <div direction="vertical">
                <div size="large" max={2}>
                    <t-avatar image="https://tdesign.gtimg.com/site/avatar.jpg"></t-avatar>
                    <t-avatar>Avatar</t-avatar>
                    <t-avatar image="https://tdesign.gtimg.com/site/avatar.jpg"></t-avatar>
                </div>

                <div size="large" max={2} >
                    <t-avatar image="https://tdesign.gtimg.com/site/avatar.jpg"></t-avatar>
                    <t-avatar>Avatar</t-avatar>
                    <t-avatar ></t-avatar>
                </div>

                <div size="large" max={2} collapseAvatar="more">
                    <t-avatar image="https://tdesign.gtimg.com/site/avatar.jpg"></t-avatar>
                    <t-avatar>Avatar</t-avatar>
                    <t-avatar ></t-avatar>
                </div>
            </div>
        );
    }
}
