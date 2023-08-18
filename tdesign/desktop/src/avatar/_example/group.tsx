import { h, tag, WeElement } from 'omi'

import '../index'

// const { Group: AvatarGroup } = Avatar;

@tag('avatar-group')

export default class AvatarGroup extends WeElement {
    static css = 't-avatar{}'
    render() {
        return (
            <div direction="vertical">
                <div>
                    <t-avatar image="https://tdesign.gtimg.com/site/avatar.jpg"></t-avatar>
                    <t-avatar>W</t-avatar>
                    <t-avatar></t-avatar>
                </div>

                <div size="large">
                    <t-avatar image="https://tdesign.gtimg.com/site/avatar.jpg"></t-avatar>
                    <t-avatar>W</t-avatar>
                    <t-avatar></t-avatar>
                </div>
            </div>
        );
    }
}
