import { WeElement, tag } from "omi"
import '../index'
import '../../button'

@tag('badge-offset')
export default class Badgeoffset extends WeElement {
    static css = 't-badge{}'
    render() {
        return (
            <>
                <t-badge count={2}>
                    <t-button>默认</t-button>
                </t-badge>
                <t-badge count={2} offset={[10, 10]}>
                    <t-button>[10,10]</t-button>
                </t-badge>
                <t-badge count={2} offset={[-10, 10]}>
                    <t-button>[-10,10]</t-button>
                </t-badge>
                <t-badge count={2} offset={[-10, -10]}>
                    <t-button>[-10,-10]</t-button>
                </t-badge>
                <t-badge count={2} offset={[10, -10]}>
                    <t-button>[10,-10]</t-button>
                </t-badge>
            </>
        )
    }
}