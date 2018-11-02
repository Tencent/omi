import { tag, WeElement } from "omi";
import style from "../style/_table.scss";

@tag("el-table", true)
class ElTable extends WeElement {
  css() {
    return style
  }

  install() {
    this.data.columns = this.props.data.columns
    this.data.dataSource = this.props.data.dataSource
  }

  render(props, data) {
    return (
      <div
        className="el-table el-table--fit el-table--enable-row-hover el-table--enable-row-transition"
        style={{ width: "100%" }}
        <div className="el-table__header-wrapper">
          <table cellSpacing={0} cellPadding={0} border={0} className="el-table__header" >
          >
            <colgroup>
              {this.data.columns.map(item => {
                return <col width={item.width} />
              })}
            </colgroup>
            <thead className="has-gutter">
              <tr className>
                {this.data.columns.map(item => {
                  return <th colSpan={1} rowSpan={1} className="el-table_41_column_179     is-leaf">
                    <div className="cell">{item.title}</div>
                    </th>
                })}
              </tr>
            </thead>
          </table>
        </div>
        <div className="el-table__body-wrapper is-scrolling-none">
          <table cellSpacing={0} cellPadding={0} border={0} className="el-table__body" >
            <colgroup>
              {this.data.columns.map(item => {
                return <col width={item.width} />
              })}
            </colgroup>
            <tbody>
              {
                data.dataSource.map(item => {
                return (
                  <tr className="el-table__row">
                      <td rowSpan={1} colSpan={1} className="el-table_41_column_179  ">
                        <div className="cell">{item.name}</div>
                      </td>
                      <td rowSpan={1} colSpan={1} className="el-table_41_column_180  ">
                        <div className="cell">{item.age}</div>
                      </td>
                      <td rowSpan={1} colSpan={1} className="el-table_41_column_181  ">
                    >
                      <div className="cell">{item.address}</div>
                      </td>
                  </tr>
                  )
                })
              }

            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
