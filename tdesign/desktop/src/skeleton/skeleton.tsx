import { WeElement, tag, OmiProps, classNames } from "omi"
import { SkeletonProps, SkeletonRowCol, SkeletonRowColObj } from './type'
import { StyledProps, Styles ,TNode } from "@src/common"
import { pxCompat } from "@src/common/helper"
import parseTNode from "@src/utils/parseTNode"
import isNumber from 'lodash/isNumber'
import css from './style/index'

export type TSkeletonProps = SkeletonProps & StyledProps & { children: TNode }

const ThemeMap: Record<SkeletonProps['theme'], SkeletonRowCol> = {
    text: [1],
    avatar: [{ type: 'circle', size: '56px' }],
    paragraph: [1, 1, { width: '70%' }],
    'avatar-text': [[{ type: 'circle' }, { type: 'text', height: '32px' }]],
    tab: [{ height: '30px' }, { height: '200px' }],
    article: [
        { type: 'rect', height: '30px', width: '100%' },
        { type: 'rect', height: '200px', width: '100%' },
        ...[3, 2, 2, 2].map((value) => Array(value).fill({ type: 'text', height: '30px' })),
    ],
}

@tag('t-skeleton')
export default class Skeleton extends WeElement<TSkeletonProps>{
    static css = css as string
    static defaultProps = {animation: 'none', delay: 0, loading: true, theme: 'text'}
    static propsType = {
        animation: String,
        delay: Number,
        loading: Boolean,
        rowCol: Object,
        theme: String
    }

    ctrlLoading = this.props.loading
    setCtrlLoading = (loading : boolean) => {
        this.ctrlLoading = loading
    }

    installed() {
        if(this.props.delay > 0 && !this.props.loading) {
            const timeout = setTimeout(() => {
                this.setCtrlLoading(this.props.loading)
            }, this.props.delay)
            return () => clearTimeout(timeout)
        } else {
            this.setCtrlLoading(this.props.loading)
        }
    }

    render(props: OmiProps<TSkeletonProps, any>, store: any) {
        const { animation, loading, rowCol, theme, className, style, delay = 0, children } = props
        const classPrefix = 't'
        const name = `${classPrefix}-skeleton` // t-skeleton

        const renderCols = (_cols: Number | SkeletonRowColObj | Array<SkeletonRowColObj>) => {
            const getColItemClass = (obj: SkeletonRowColObj) =>
                classNames(`${name}__col`, `${name}--type-${obj.type || 'text'}`, {
                    [`${name}--animation-${animation}`]: animation,
                })

            const getColItemStyle = (obj: SkeletonRowColObj): Styles => {
                const styleName = [
                    'width',
                    'height',
                    'marginRight',
                    'marginLeft',
                    'margin',
                    'size',
                    'background',
                    'backgroundColor',
                ]
                const style: Styles = {}
                styleName.forEach((name) => {
                    if (name in obj) {
                        const px = pxCompat(obj[name as keyof typeof pxCompat])
                        if (name === 'size') {
                            [style.width, style.height] = [px, px]
                        } else {
                            style[name] = px
                        }
                    }
                })
                return style
            }

            let cols: Array<SkeletonRowColObj> = []
            if (Array.isArray(_cols)) {
                cols = _cols
            } else if (isNumber(_cols)) {
                cols = new Array(_cols).fill({ type: 'text' }) as SkeletonRowColObj[]
            } else {
                cols = [_cols as SkeletonRowColObj]
            }

            return cols.map((item, index) => (
                <div key={index} class={getColItemClass(item)} style={getColItemStyle(item)}>
                    {parseTNode(item.content as TNode)}
                </div>
            ))
        }

        const renderRowCol = (_rowCol?: SkeletonRowCol) => {
            const renderedRowCol: SkeletonRowCol = _rowCol || rowCol

            return renderedRowCol.map((item, index) => (
                <div key={index} class={`${name}__row`}>
                    {renderCols(item)}
                </div>
            ))
        }

        if (!this.ctrlLoading) {
            return <>{children}</>
        }

        const childrenContent = []
        if (theme && !rowCol) {
            childrenContent.push(renderRowCol(ThemeMap[theme]))
        }
        if (rowCol) {
            childrenContent.push(renderRowCol(rowCol))
        }
        if (!theme && !rowCol) {
            // 什么都不传时，传入默认 rowCol
            childrenContent.push(renderRowCol([1, 1, 1, { width: '70%' }]))
        }

        return (
            <div class={className} style={style}>
                {childrenContent}
            </div>
        )
    }
}
