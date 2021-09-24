import { WeElement, h, tag } from 'omi'
import './iphone-demo'

interface Props { }

const tagName = 'mobile-show'
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [tagName]: Omi.Props & Props
        }
    }
}

@tag(tagName)
export default class extends WeElement<Props> {

    render(props) {

        return (
            <div style="transform: scale(0.65) translate(-150px,-200px);">
                <iphone-demo src="https://tencent.github.io/omi/packages/admin/dist/index.html" />
            </div>
        )
    }
}
