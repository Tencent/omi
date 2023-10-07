import { WeElement, tag } from "omi"
import '../index'
import '../../button'

@tag('badge-shape')
export default class BadgeShape extends WeElement {
    static css = 't-badge{}'
    render() {
        return (
            <>
                <t-badge shape={'circle'} count={2}>
                    <t-button> circle</t-button>
                </t-badge>
                <t-badge shape={'round'} count={99}>
                    <t-button>round</t-button>
                </t-badge>
            </>
        )
    }
}