import { h, tag, WeElement } from 'omi'
import '../../button'
import '../../notification'
import '../../space'

import '../index'
import { log } from 'console'

@tag('comment-reply-form')

export default class BasicComment extends WeElement {
    // const[replyData, setReplayData] = useState('');
    static css = 't-comment{}'

    submitReply() {
        alert('发送回复的功能待完善！');
    }

    replyForm = (
        <t-space direction="vertical" align="end" style={{ width: '100%' }}>
            <textarea placeholder="请输入内容" style={{ width: 540, height: 50 }} id='test-textarea' />
            <t-button style={{ float: 'right' }} onClick={this.submitReply}>回复</t-button>
            <t-notification style="margin:12px;" duration={0} theme="warning" title="warning" content="发送回复的功能待完善！" />
        </t-space>
    );

    render() {
        return <t-comment avatar="https://tdesign.gtimg.com/site/avatar.jpg" content={this.replyForm} />;

    }
}
