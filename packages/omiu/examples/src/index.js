import { define, render, WeElement } from 'omi'
import '../../src/components/data/pagination'
import '../../src/components/form/adjustment'
import '../../src/components/form/button'
import '../../src/components/data/progress'
import '../../src/components/data/timeline'
import '../../src/components/others/nav'
import '../../src/components/others/dialog'

define('my-app', class extends WeElement {
  onChange = v => {
    console.log('page' + v)
  }

  onAdjustmentChange = v => {
    console.log(v)
  }

  install() {
    this.navIndex = 0
  }

  navChange = (index) => {
    this.navIndex = index
    this.update()
  }

  render() {
    return (
      <div>
        <o-pagination
          total={125}
          currentPage={2}
          pageSize={10}
          onChange={this.onChange}
        />

        <br />
        <o-adjustment
          onChange={this.onAdjustmentChange}
          min={1}
          max={10}
          step={1}
          value={2}
          label="描述文字"
        />

        <br />
        <o-progress
          bgColor='#ccc'
          innerColor='#01DE6C'
          value={50}
        />

        <br />
        <o-timeline />

        <br />
        <o-button type='primary'>创建新项目</o-button>
        <br />
        <br />
        <o-button onClick={() => { console.log(1) }}>管理项目</o-button>

        <br />
        <br />
        <o-nav onChange={this.navChange}>
          <item active={this.navIndex === 0}>我的项目</item>
          <item active={this.navIndex === 1}>所有项目</item>
        </o-nav>

        <br />
        <br />
        <o-button onClick={() => { console.log(1) }}>显示弹窗</o-button>


        <o-dialog onClick={() => { console.log(1) }}>
          <button>abc</button>
        </o-dialog>
      </div>
    )
  }

  css(){
    //test scoped css
    return `button{color:red;}`
  }
})

render(<my-app />, 'body')