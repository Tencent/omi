import { h, tag, WeElement } from 'omi'
import '../index'

const style = {
    't-skeleton-demo': {
        width: '100%',
    },
    't-skeleton-demo-list-li': {
        padding: '16px 0',
        display: 'flex',
    },
    't-skeleton-demo-list-avatar': {
        display: 'inline-block',
        height: '56px',
        margin: '6px 16px 6px 0px',
        flexShrink: '0',
    },
    't-skeleton-demo-list-paragraph': {
        display: 'inline-block',
        width: '90%',
    },
    'row-col-content': {
        width: '100%',
        textAlign: 'center',
    },
    'row-col-content__header': {
        padding: '10px',
        borderBottom: '1px solid #ccc',
    },
    'row-col-content__content': {
        padding: '10px',
        height: '200px',
    },
};

const rowCol = [
    [1, 1, 1].map(() => ({
        type: 'rect',
        content: 'image',
        width: '33%',
        height: '180px',
    })),
    [
        {
            type: 'circle',
            size: '50px',
        },
        {
            type: 'rect',
            margin: '20px 0',
            width: 'calc(100% - 170px)',
            height: '30px',
        },
        {
            type: 'rect',
            marginLeft: '20px',
            width: '80px',
            height: '30px',
            content: '确定',
        },
    ],
    1,
    1,
    { type: 'text', width: '70%', margin: '0 0 16px 0' },
    {
        type: 'rect',
        width: '100%',
        height: '300px',
        content: () => (
            <div class="row-col-content">
                <h3 class="row-col-content__header">标题</h3>
                <div class="row-col-content__content">内容</div>
            </div>
        ),
    },
]

@tag('skeleton-advance')
export default class SkeletonAdvance extends WeElement {
    static css = 't-skeleton{}'
    render() {
        return (
            <div style={style['t-skeleton-demo']}>
                <div class="t-skeleton-demo-card">
                    <div class="header">组合成网页效果</div>
                    <div class="content">
                        <t-skeleton rowCol={rowCol}></t-skeleton>
                    </div>
                </div>

                <div class="t-skeleton-demo-card">
                    <div class="header">组合成列表效果</div>
                    <div class="content">
                        <ul style={style['t-skeleton-demo-list']}>
                            {new Array(3).fill(0).map((_, index) => (
                                <li key={index} style={style['t-skeleton-demo-list-li']}>
                                    <t-skeleton style={style['t-skeleton-demo-list-avatar']} theme={'avatar'}></t-skeleton>
                                    <t-skeleton style={style['t-skeleton-demo-list-paragraph']} theme={'paragraph'}></t-skeleton>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}