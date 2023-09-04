import { tag, render, h, WeElement } from 'omi'

import "../index"
@tag("message-close-all")
class MessageCloseAll extends WeElement{
    static css = `
    .all{position:fixed;top:3%;left:45%;z-index:9999;display:none;}
    `
    render(){
        return (
            <>
                <t-space class="all" direction="vertical" size="medium">
                    <t-message duration={1000} theme="info" content="这是第一条消息" />
                    <t-message duration={2000} theme="warning" content="这是第二条消息" />
                    <t-message duration={3000} theme="error" content="这是第三条消息" />
                </t-space>
            </>
        )
    }
}
render(<message-close-all></message-close-all>, 'body')