import { h, tag, WeElement } from 'omi'

import '../index'

@tag('comment-base')
export default class BasicComment extends WeElement {
    static css = 't-comment{}'
    render() {
        return (
            <t-comment
                avatar="https://tdesign.gtimg.com/site/avatar.jpg"
                author="评论作者名"
                datetime="今天16:38"
                content="评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容。"
            />
        );
    }
}
