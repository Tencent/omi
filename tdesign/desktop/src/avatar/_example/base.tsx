import { h, tag, WeElement } from 'omi'

import '../index'

@tag('avatar-base')
export default class AvatarBase extends WeElement {
    static css = 't-avatar{}'
    render() {
        return (
            <div>
                <t-avatar style={{ marginRight: '40px' }} />
                <t-avatar
                    image="https://tdesign.gtimg.com/site/avatar.jpg"
                    hideOnLoadFailed={false}
                    style={{ marginRight: '40px' }}
                />
                <t-avatar style={{ marginRight: '40px' }}>W</t-avatar>
            </div>
        )
    }
}

