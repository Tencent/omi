import { WeElement, h, tag } from 'omi'
import css from './device/iphone13.css'

interface Props {
    src: string;
}

const tagName = 'iphone-demo'
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [tagName]: Omi.Props & Props
        }
    }
}

@tag(tagName)
export default class extends WeElement<Props> {

    static css = css

    render(props) {

        return (
            <div class="device device-iphone-13">
                <div class="device-frame">
                    <div class="device-content">
                        <div style="width: 100%; height:28px;"></div>
                        <iframe width="100%" height="100%" class="device-iframes-13"
                            src={props.src}></iframe>
                    </div>
                </div>
                <div class="device-stripe"></div>
                <div class="device-header"></div>
                <div class="device-sensors"></div>
                <div class="device-btns"></div>
                <div class="device-power"></div>
            </div>
        )
    }
}
