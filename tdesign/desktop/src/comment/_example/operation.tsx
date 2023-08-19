import { h, tag, WeElement } from 'omi'

import '../index'

@tag('comment-operation')
export default class OperationComment extends WeElement {
    static css = 't-comment{}'
    actions = [
        <div>
            <span>6</span>
        </div>,
        <div key="Chat">
            <span>回复</span>
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
