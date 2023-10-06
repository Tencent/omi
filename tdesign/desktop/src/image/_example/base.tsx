import { WeElement, tag } from "omi"
import '../index'
import '../../space'

@tag('image-base')
export default class ImageBase extends WeElement {
    static css = 't-image{}'
    src = ''
    setSrc = (tSrc : string) => {
        this.src = tSrc
    }

    installed() {
        const timer = setTimeout(() => {
            this.setSrc('https://tdesign.gtimg.com/demo/demo-image-1.png')
        },100)

        return () => {
            clearTimeout(timer)
        }
    }

    render() {
        const { src } = this
        return (
            <t-space breakLine size={16} >
                {
                    ['fill', 'contain', 'cover', 'none', 'scale-down'].map(item => (
                        <t-space direction="vertical" align="left" key={item}>
                            <t-image
                                src={src}
                                fit={item}
                                // fallback='https://tdesign.gtimg.com/demo/demo-image-1.png'
                                style={{ width: 120, height: 120 }}
                            />
                            {item}
                        </t-space>
                    ))
                }
            </t-space>
        )
    }
}