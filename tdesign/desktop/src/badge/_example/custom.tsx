import { WeElement, tag } from "omi"
import '../index'
import '../../space'

@tag('badge-custom')
export default class BadgeCustom extends WeElement {
    static css = 't-badge{}'
    badgeBlockStyle = {
        width: '40px',
        height: '40px',
        background: '#EEEEEE',
        border: '1px solid #DCDCDC',
        borderRadius: '3px',
    }
    render(){
        const { badgeBlockStyle } = this
        return (
            <t-space direction="vertical">
                <t-space size={24}>
                    <t-badge count="2" dot>
                        <div style={badgeBlockStyle}></div>
                    </t-badge>
                    <t-badge count="hot">
                        <div style={badgeBlockStyle}></div>
                    </t-badge>
                    <t-badge count="new" color="var(--td-success-color)">
                        <div style={badgeBlockStyle}></div>
                    </t-badge>
                    <t-badge count="100" color="var(--brand-main)" shape="round">
                        <div style={badgeBlockStyle}></div>
                    </t-badge>
                </t-space>

                <t-space size={24}>
                    <t-badge count="2" dot>
                        <div style={badgeBlockStyle}></div>
                    </t-badge>
                    <t-badge count={<span style={{ color: 'var(--td-error-color)' }}>hot</span>} color="var(--td-error-color-1)">
                        <div style={badgeBlockStyle}></div>
                    </t-badge>
                    <t-badge count={<span style={{ color: 'var(--td-success-color)' }}>new</span>} color="var(--td-success-color-1)">
                        <div style={badgeBlockStyle}></div>
                    </t-badge>
                    <t-badge count={<span style={{ color: 'var(--td-brand-color)' }}>new</span>} color="var(--td-brand-color-1)">
                        <div style={badgeBlockStyle}></div>
                    </t-badge>
                </t-space>
            </t-space>
        )
    }
}