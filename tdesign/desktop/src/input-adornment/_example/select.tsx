import { h, tag, WeElement } from 'omi'
import '../../space'
import '../index'
import '../../space'

@tag('input-adornment-select')

export default class BaseExample extends WeElement {
    static css = 't-input-adornment{}'
    protocolSelect = (
        <div
            autoWidth
            options={['http://', 'https://'].map((value) => ({ label: value, value }))}
            defaultValue="http://"
        />
    );

    tldSelect = (
        <div
            autoWidth
            options={['.com', '.cn', '.net', '.org'].map((value) => ({ label: value, value }))}
            defaultValue=".cn"
        />
    );
    render() {

        return (
            <t-space direction="vertical" className="adornment-select">
                <t-input-adornment prepend={this.protocolSelect}>
                    <input type="text" />
                </t-input-adornment>

                <t-input-adornment append={this.tldSelect}>
                    <input type="text" />
                </t-input-adornment>

                <t-input-adornment prepend={this.protocolSelect} append={this.tldSelect}>
                    <div
                        options={['tencent', 'qq', 'cloud.tencent'].map((value) => ({ label: value, value }))}
                        defaultValue="tencent"
                    />
                </t-input-adornment>
            </t-space>
        );
    }
}
