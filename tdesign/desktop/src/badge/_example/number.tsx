import { WeElement, tag } from "omi"
import '../index'
import '../../button'

@tag('badge-number')
export default class BadgeNumber extends WeElement {
    static css = 't-badge{}'
    render() {
        return (
            <>
                <t-badge count={2}>
                    <t-button size="large"> </t-button>
                </t-badge>
                <t-badge count={99}>
                    <t-button size="large"> </t-button>
                </t-badge>
                <t-badge count={100}>
                    <t-button size="large"> </t-button>
                </t-badge>
            </>
        )
    }
}