/** @jsx nativeEvents */
import nativeEvents from 'jsx-native-events'
import { useState } from 'react'
import 'omim/icon-button'

export default function SomeComponent(props) {
    const [result, setSwitch] = useState(false)

    return <div>
        <p>The switch is {result ? 'on' : 'off'}.</p>
        <m-icon-button color="red" icons="['favorite', 'favorite_border']" onEventChange={e => setSwitch(e.detail.isOn)}></m-icon-button>
    </div>
}
