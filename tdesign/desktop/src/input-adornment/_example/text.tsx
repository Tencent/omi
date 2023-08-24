import { h, tag, WeElement } from 'omi'
import '../../space'
import '../index'

@tag('input-adornment-text')
export default class BaseExample extends WeElement {
    static css = 't-input-adornment{}'
    render() {
        return (
            <t-space direction="vertical" style={{ width: '100%' }}>
                <t-input-adornment prepend="http://" append>
                    <input type="text" />
                </t-input-adornment>

                <t-input-adornment prepend append=".com">
                    <input type="text" />
                </t-input-adornment>

                <t-input-adornment prepend="http://" append=".com">
                    <input type="text" />
                </t-input-adornment>
            </t-space>
        );
    }
}
