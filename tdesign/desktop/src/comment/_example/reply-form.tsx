import { h, tag, WeElement } from 'omi'

import '../index'

@tag('comment-reply-form')

export default class BasicComment extends WeElement {
    // const[replyData, setReplayData] = useState('');
    static css = 't-comment{}'

    submitReply() {
        // NotificationPlugin.info({
        //     title: '回复内容',
        //     content: replyData,
        //     duration: 3000,
        // });
    }

    replyForm = (
        <div direction="vertical" align="end" style={{ width: '100%' }}>
            <div placeholder="请输入内容" />
            <div style={{ float: 'right' }} onClick={this.submitReply}>回复</div>
        </div>
    );
    render() {

        return <t-comment avatar="https://tdesign.gtimg.com/site/avatar.jpg" content={this.replyForm} />;
    }
}
