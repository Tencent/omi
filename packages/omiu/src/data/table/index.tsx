import { tag, Component, classNames, bind } from 'omi'
import { tailwind } from '@/tailwind'
import * as VTable from '@visactor/vtable'

@tag('o-table')
export class Table extends Component {
  static css = [
    tailwind,
    `:host {
    display: block;
   
  }
  `,
  ]

  static defaultProps = {
    width: Math.min(window.innerWidth - 80, 800),
    height: 400,
    widthMode: 'standard',
  }
  table: VTable.ListTable

  installed() {
    const options = {
      container: this.rootElement,
      records: this.props.records || this.props.data,
      columns: this.props.columns,
      widthMode: this.props.widthMode,
    }

    // 创建 vchart 实例
    this.table = new VTable.ListTable(options)

    this.style.width = this.props.width + 'px'
    this.style.height = this.props.height + 'px'
  }

  render(props) {
    return (
      <div
        style={{
          width: props.width + 'px',
          height: props.height + 'px',
        }}
      ></div>
    )
  }
}
