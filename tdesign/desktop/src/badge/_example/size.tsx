import { WeElement, tag } from "omi"
import '../index'
import '../../button'

@tag('badge-size')
export default class BadgeSize extends WeElement {
    static css = 't-badge{}'
    render() {
        return (
            <>
                <h3 style={{ marginBottom: 16 }}>1.默认大小</h3>
                <t-badge count={2}>
                    <t-button>按钮</t-button>
                </t-badge>
                <t-badge count={99}>
                    <t-button>按钮</t-button>
                </t-badge>
                <t-badge count={999}>
                    <t-button>按钮</t-button>
                </t-badge>
                <h3 style={{ marginBottom: 16, marginTop: 32 }}>2.小</h3>
                <t-badge count={2} size="small">
                    <t-button>按钮</t-button>
                </t-badge>
                <t-badge count={99} size="small">
                    <t-button>按钮</t-button>
                </t-badge>
                <t-badge count={999} size="small">
                    <t-button>按钮</t-button>
                </t-badge>
            </>
        )
    }
}