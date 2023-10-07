import { h, tag, WeElement } from 'omi'
import '../index'

const themes = [
    { label: '文本', value: 'text' },
    { label: '头像', value: 'avatar' },
    { label: '段落', value: 'paragraph' },
    { label: '头像描述', value: 'avatar-text' },
    { label: '选项卡', value: 'tab' },
    { label: '文章', value: 'article' },
]

@tag('skeleton-theme')
export default class SkeletonTheme extends WeElement {
    static css = 't-skeleton{}'
    render() {
        return (
            <div class="t-skeleton-demo">
                {themes.map((theme, index) => (
                    <div class="t-skeleton-demo-card" key={`animation-${index}`}>
                        <div class="header">{theme.label}</div>
                        <div class="content">
                            <t-skeleton theme={theme.value}></t-skeleton>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}