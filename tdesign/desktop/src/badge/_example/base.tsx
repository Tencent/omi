import { WeElement, tag } from "omi"
import '../index'
import '../../button'
import '../../icon/user'

@tag('badge-base')
export default class BadgeBase extends WeElement {
    static css = 't-badge{}'
    render(){
        return (
            <>
                <t-badge dot count = {2}>
                    <t-button size="large"> </t-button>
                </t-badge>
                <t-badge dot count={99}>
                    解锁新徽章
                </t-badge>
                <t-badge dot count={100}>
                    <t-icon-user size={24}></t-icon-user>
                </t-badge>
            </>
        )
    }
}