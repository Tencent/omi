import { h, tag, WeElement } from 'omi'

import '../index'

@tag('avatar-shape')
export default class AvatarShape extends WeElement {
    static css = 't-avatar{}'
    render() {
        return (
            <dicv>
                <t-avatar style={{ marginRight: '40px' }}>W</t-avatar>
                <t-avatar shape="round" style={{ marginRight: '40px' }}>
                    W
                </t-avatar>
            </dicv>
        );
    }
}
