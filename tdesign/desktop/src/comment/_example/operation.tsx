import { h, tag, WeElement } from 'omi'

import '../index'
import '../../icon/thumb-up'
import '../../icon/chat'

@tag('comment-operation')
export default class OperationComment extends WeElement {
    static css = 't-comment{}'
    actions = [
        <div>
            <t-icon-thumb-up size='16px'></t-icon-thumb-up>
            <span > 6</span>
        </div>,
        <div >
            <t-icon-chat size='16px'></t-icon-chat>
            <span> 回复</span>
        </div>,
    ];
    render() {
        return (
            <t-comment
                avatar="https://tdesign.gtimg.com/site/avatar.jpg"
                author="评论作者名"
                datetime="今天16:38"
                content="评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容。"
                actions={this.actions}
            />
        );
    }
}
