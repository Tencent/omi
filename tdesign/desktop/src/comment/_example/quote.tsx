import { h, tag, WeElement } from 'omi'

import '../index'

@tag('comment-quote')
export default class quoteComment extends WeElement {
    static css = 't-comment{}'
    actions = [
        <div>
            <span>6</span>
        </div>,
        <div>
            <span>回复</span>
        </div>,
    ];

    quoteElement = (
        <t-comment
            author="引用内容标题"
            content="引用内容引用内容引用内容引用内容引用内容引用内容引用内容引用内容引用内容引用内容引用内容引用内容引用内容引用内容引用内容引用内容引用内容引用内容。"
        />
    );
    render() {
        return (
            <t-comment
                avatar="https://tdesign.gtimg.com/site/avatar.jpg"
                author="评论作者名A"
                datetime="今天16:38"
                content="A评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容。"
                actions={this.actions}
                quote={this.quoteElement}
            />
        );
    }
}
