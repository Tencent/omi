import { WeElement, h, tag } from 'omi'
import { tw, sheet } from 'omi-twind'
import '@omiu/button'
import '@omiu/dialog'
import '@omiu/action-sheet'
import '../docs/admin-docs'
import './code-demo'
import './code-demo/container'

interface Props { }

const tagName = 'action-sheet-component'
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName]: Omi.Props & Props
    }
  }
}

@tag(tagName)
export default class extends WeElement<Props> {

  static css = [sheet.target, `o-button{margin-left:10px;}`]

  install() { }

  visibleA = false
  visibleB = false

  ItemClick = () => {
    this.visibleA = false
    this.visibleB = false
    this.update()
  }

  render() {
    return (
      <code-demo-container>
        <code-demo
          title="弹出式菜单"
          describe={'基础演示'}
          code={`
\`\`\`jsx
  visibleA = false
  visibleB = false

  ItemClick = () => {
    this.visibleA = false
    this.visibleB = false
    this.update()
  }

<o-action-sheet 
  onItemClick={e => {this.ItemClick()}} 
  onClose={e => {this.ItemClick()}} 
  menus={[{
    label: 'Option 1'
  }, {
    label: 'Option 2'
  }]} actions={[{
    label: 'Cancel'
  }]} show={this.visibleA} type="ios">
</o-action-sheet>

<o-action-sheet 
  onItemClick={e => {this.ItemClick()}} 
  onClose={e => {this.ItemClick()}} 
  menus={[{
    label: 'Option 1'
  }, {
    label: 'Option 2'
  }]} actions={[{
    label: 'Cancel'
  }]} show={this.visibleB} type="android">
</o-action-sheet>
\`\`\`
          `}
        >
          <div slot="demo" class={tw`px-5 py-5`}>

          <o-button onClick={e => {
                      this.visibleA = true
                      this.update()
                    }}
                    block type="default" text="IOS ActionSheet"></o-button>
          <o-action-sheet 
            onItemClick={e => {this.ItemClick()}} 
            onClose={e => {this.ItemClick()}} 
            menus={[{
              label: 'Option 1'
            }, {
              label: 'Option 2'
            }]} actions={[{
              label: 'Cancel'
            }]} show={this.visibleA} type="ios">
          </o-action-sheet>

          <o-button onClick={e => {
                  this.visibleB = true
                  this.update()
                  }}
                   block type="default" style="margin-top: 15px;" text="Android ActionSheet"></o-button>
          <o-action-sheet 
            onItemClick={e => {this.ItemClick()}} 
            onClose={e => {this.ItemClick()}} 
            menus={[{
              label: 'Option 1'
            }, {
              label: 'Option 2'
            }]} actions={[{
              label: 'Cancel'
            }]} show={this.visibleB} type="android">
          </o-action-sheet>
          </div>
        </code-demo>

      </code-demo-container>
    )
  }
}
