import { WeElement, render, h, options, tag } from 'omi'

options.ignoreAttrs = true

import '../index.css'

import '@omiu/button'

import './components/layout-header'
import './components/layout-left-panel'

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
                <layout-header class={tw`h-12 block`}></layout-header>

                <div class={tw`flex flex-row`}>
                    <layout-left-panel class={tw`w-64`}></layout-left-panel>
                    <layout-container class={tw`flex-1`}>
                        <slot></slot>
                    </layout-container>
                </div>

            </div>
        )
    }
}


