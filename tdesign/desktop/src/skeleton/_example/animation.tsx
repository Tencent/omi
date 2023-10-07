import { h, tag, WeElement } from 'omi'
import '../index'

const animations = [
    { label: '渐变加载动画', value: 'gradient' },
    { label: '闪烁加载动画', value: 'flashed' },
]

@tag('skeleton-animation')
export default class SkeletonAnimation extends WeElement {
    static css = 't-skeleton{}'
    render() {
        return (
            <div class="t-skeleton-demo">
                {animations.map((animation, index) => (
                    <div class="t-skeleton-demo-card" key={`animation-${index}`}>
                        <div class="header">{animation.label}</div>
                        <div class="content">
                            <t-skeleton animation={animation.value}></t-skeleton>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}
