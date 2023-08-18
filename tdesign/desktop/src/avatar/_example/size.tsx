import { h, tag, WeElement } from 'omi'

import '../index'

@tag('avatar-size')
export default class AvatarSize extends WeElement {
    static css = 't-avatar{}'
    render() {
        return (
            <div direction="vertical" size="large">
                <div align="center">
                    <t-avatar size="small" style={{ marginRight: '40px' }}>
                        W
                    </t-avatar>
                    <t-avatar size="medium" style={{ marginRight: '40px' }}>
                        W
                    </t-avatar>
                    <t-avatar size="large" style={{ marginRight: '40px' }}>
                        W
                    </t-avatar>
                    <t-avatar size="100px" style={{ marginRight: '40px' }}>
                        W
                    </t-avatar>
                </div>
                <div align="center">
                    <t-avatar shape="round" size="small" style={{ marginRight: '40px' }}>
                        W
                    </t-avatar>
                    <t-avatar shape="round" size="medium" style={{ marginRight: '40px' }}>
                        W
                    </t-avatar>
                    <t-avatar shape="round" size="large" style={{ marginRight: '40px' }}>
                        W
                    </t-avatar>
                    <t-avatar shape="round" size="100px" style={{ marginRight: '40px' }}>
                        W
                    </t-avatar>
                </div>
                <div align="center">
                    <t-avatar alt='test' image="https://tdesign.gtimg.com/site/avatar.jpg" shape="round" size="small" style={{ marginRight: '40px' }}>
                    </t-avatar>
                    <t-avatar image="https://tdesign.gtimg.com/site/avatar.jpg" shape="round" size="medium" style={{ marginRight: '40px' }}>
                    </t-avatar>
                    <t-avatar image="https://tdesign.gtimg.com/site/avatar.jpg" shape="round" size="large" style={{ marginRight: '40px' }}>
                    </t-avatar>
                    <t-avatar image="https://tdesign.gtimg.com/site/avatar.jpg" shape="round" size="100px" style={{ marginRight: '40px' }}>
                    </t-avatar>
                </div>
            </div>
        );
    }
}
