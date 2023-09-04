import { tag, render, h, WeElement } from 'omi'

import "../index"
@tag("message-close")
class MessageClose extends WeElement{
    static css = ` .top{position:fixed;top:3%;left:45%;z-index:9999;display:none;}`
    
    render(){
        return (
            <>
                <t-message class="top" theme="info" content="调用关闭函数关闭信息提示框" />
            </>
        )
    }
}
render(<message-close></message-close>, 'body')