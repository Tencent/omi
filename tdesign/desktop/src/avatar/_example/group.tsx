import { h, tag, WeElement } from 'omi'

import '../index'
import '../../space'
import '../avatar-group'
import '../avatar-context'


@tag('avatar-group')

export default class AvatarGroup extends WeElement {
    static css = 't-avatar{}'
    render() {
        return (
            <t-space direction="vertical">
                <t-avatar-group>
                    <t-avatar image="https://tdesign.gtimg.com/site/avatar.jpg"></t-avatar>
                    <t-avatar>W</t-avatar>
                    <t-avatar></t-avatar>
                </t-avatar-group>

                <t-avatar-group size="large">
                    <t-avatar image="https://tdesign.gtimg.com/site/avatar.jpg"></t-avatar>
                    <t-avatar>W</t-avatar>
                    <t-avatar></t-avatar>
                </t-avatar-group>
            </t-space>
        );
    }
}
