import { tag, WeElement } from 'omi'
import style from '../style/_table.scss'

@tag('el-table', true)
class ElTable extends WeElement {
    css() {
        return style
    }

    install(){
        this.data.columns = this.props.data.columns
        this.data.dataSource = this.props.data.dataSource
    }

    render(props, data) {

        return (

            <div className="el-table el-table--fit el-table--enable-row-hover el-table--enable-row-transition" style={{ width: '100%' }}>
                <div className="hidden-columns">
                    <div />
                    <div />
                    <div />
                </div>
                <div className="el-table__header-wrapper">
                    <table cellSpacing={0} cellPadding={0} border={0} className="el-table__header" style={{ width: 657 }}>
                        <colgroup>
                            <col name="el-table_41_column_179" width={180} />
                            <col name="el-table_41_column_180" width={180} />
                            <col name="el-table_41_column_181" width={297} />
                            <col name="gutter" width={0} />
                        </colgroup>
                        <thead className="has-gutter">
                            <tr className>
                                <th colSpan={1} rowSpan={1} className="el-table_41_column_179     is-leaf">
                                    <div className="cell">日期</div>
                                </th>
                                <th colSpan={1} rowSpan={1} className="el-table_41_column_180     is-leaf">
                                    <div className="cell">姓名</div>
                                </th>
                                <th colSpan={1} rowSpan={1} className="el-table_41_column_181     is-leaf">
                                    <div className="cell">地址</div>
                                </th>
                                <th className="gutter" style={{ width: 0, display: 'none' }} />
                            </tr>
                        </thead>
                    </table>
                </div>
                <div className="el-table__body-wrapper is-scrolling-none">
                    <table cellSpacing={0} cellPadding={0} border={0} className="el-table__body" style={{ width: 657 }}>
                        <colgroup>
                            <col name="el-table_41_column_179" width={180} />
                            <col name="el-table_41_column_180" width={180} />
                            <col name="el-table_41_column_181" width={297} />
                        </colgroup>
                        <tbody>
                            {
                                data.dataSource.map(item=>{
                                    return(
                                        <tr className="el-table__row">
                                            <td rowSpan={1} colSpan={1} className="el-table_41_column_179  ">
                                                <div className="cell">{item.name}</div>
                                            </td>
                                            <td rowSpan={1} colSpan={1} className="el-table_41_column_180  ">
                                                <div className="cell">{item.age}</div>
                                            </td>
                                            <td rowSpan={1} colSpan={1} className="el-table_41_column_181  ">
                                                <div className="cell">{item.address}</div>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                            
                        </tbody>
                    </table>
                </div>
                <div className="el-table__column-resize-proxy" style={{ display: 'none' }} />
            </div>
        )
    }

    onClick = () => {
        if (this._inInGroup) {

            if (this.parentNode.data.value !== this.data.value) {
                this.parentNode.data.value = this.data.value
                this.parentNode.childNodes.forEach((node) => {
                    node.update()
                })
                this.parentNode.fire('change', { value: this.data.value })
            }

        } else if (!this.data.disabled) {
            this.data.checked = true
            this.update()
        }
    }
}