import { tag, Component } from 'omi'
import { tailwind } from '@/tailwind'
import * as VTable from '@visactor/vtable'

interface Props {
  width: number
  height: number
  widthMode: 'standard' | 'flex'
  records: any[]
  columns: any[]
  data: any[]
}
@tag('o-table')
export class Table extends Component<Props> {
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

  table: VTable.ListTable | null = null

  installed() {
    const options = {
      container: this.rootElement,
      records: this.props.records || this.props.data,
      columns: this.props.columns,
      widthMode: this.props.widthMode,
    }

    // 创建 vchart 实例
    // @ts-ignore
    this.table = new VTable.ListTable(options)

    this.style.width = this.props.width + 'px'
    this.style.height = this.props.height + 'px'
  }

  render(props: Props) {
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
