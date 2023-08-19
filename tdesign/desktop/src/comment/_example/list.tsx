import { h, tag, WeElement } from 'omi'

import '../index'

@tag('comment-list')

// const { ListItem } = List;

export default class ListComment extends WeElement {
    static css = 't-comment{}'
    actions = [
        <div>
            <span>6</span>
        </div>,
        <div>
            <span>回复</span>
        </div>,
    ];

    commentsData = [
        {
            id: 'A',
            avatar: 'https://tdesign.gtimg.com/site/avatar.jpg',
            author: '评论作者名A',
            datetime: '今天16:38',
            content:
                'A评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容。',
            // this.actions,
        },
        {
            id: 'B',
            avatar: 'https://tdesign.gtimg.com/site/avatar.jpg',
            author: '评论作者名B',
            datetime: '今天16:38',
            content:
                'B评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容。',
            // this.actions,
        },
        {
            id: 'C',
            avatar: 'https://tdesign.gtimg.com/site/avatar.jpg',
            author: '评论作者名C',
            datetime: '今天16:38',
            content:
                'C评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容。',
            // this.actions,
        },
    ];
    render() {

        return (
            <div split={true}>
                {this.commentsData.map((item) => (
                    <div key={item.id}>
                        <t-comment
                            avatar={item.avatar}
                            author={item.author}
                            datetime={item.datetime}
                            content={item.content}
                            actions={this.actions}
                        />
                    </div>
                ))}
            </div>
        );
    }
}
