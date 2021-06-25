import { WeElement, render, h, options, tag } from 'omi'

options.ignoreAttrs = true

import '../index.css'

import '@omiu/button'

import '../components/admin-header'
import '../components/admin-left-panel'

import { tw, sheet } from 'omi-twind'

interface Props {

}


const tagName = 'basic-layout'
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [tagName]: Omi.Props & Props
        }
    }
}


@tag(tagName)
export default class extends WeElement {

    static css = sheet.target

    render(props) {
        return (
            <div >
                <admin-header class={tw`h-12 block`}></admin-header>

                <div class={tw`flex flex-row`}>
                    <admin-left-panel class={tw`w-64`}></admin-left-panel>
                    <admin-main class={tw`flex-1`}>
                        <slot></slot>
                    </admin-main>
                </div>

            </div>
        )
    }
}


