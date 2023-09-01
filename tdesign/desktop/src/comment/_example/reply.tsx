import { h, tag, WeElement } from 'omi'

import '../index'
import '../../icon/thumb-up'
import '../../icon/chat'
import '../../icon/arrow-right'
const classStyles = `
<style>
.comment-reply > .t-comment__inner > .t-comment__content > .t-comment__actions {
  margin-right: 24px;
}
</style>
`;
@tag('comment-reply')
export default class replyComment extends WeElement {
    static css = 't-comment{}'
    // React.useEffect(() => {
    //     // 添加示例代码所需样式
    //     document.head.insertAdjacentHTML('beforeend', classStyles);
    // }, []);

    actions = [
        <div>
            <t-icon-thumb-up size='16px'></t-icon-thumb-up>
            <span> 6</span>
        </div>,
        <div>
            <t-icon-chat size='16px'></t-icon-chat>
            <span> 回复</span>
        </div>,
    ];

    replyAuthor = (
        <>
            <span>评论作者名B</span>
            {/* <CaretRightSmallIcon size="small" /> */}
            <t-icon-arrow-right></t-icon-arrow-right>
            <span>评论作者名A</span>
        </>
    );

    replyElement = (
        <t-comment
            avatar="https://tdesign.gtimg.com/site/avatar.jpg"
            author={this.replyAuthor}
            datetime="今天16:38"
            content="B评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容。"
            actions={this.actions}
        />
    );
    render() {

        return (
            <t-comment
                className="comment-reply"
                avatar="https://tdesign.gtimg.com/site/avatar.jpg"
                author="评论作者名A"
                datetime="今天16:38"
                content="A评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容。"
                actions={this.actions}
                reply={this.replyElement}
            />
        );
    }
}
