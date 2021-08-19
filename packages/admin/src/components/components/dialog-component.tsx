import { WeElement, h, tag } from 'omi'
import { tw, sheet } from 'omi-twind'
import '@omiu/button'
import '@omiu/dialog'
import { alert, confirm, prompt } from '@omiu/dialog-extention'
import '../docs/admin-docs'
import './code-demo'
import './code-demo/container'

interface Props { }

const tagName = 'dialog-component'
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

  render() {
    return (
      <code-demo-container>
        <code-demo
          title="弹窗"
          describe={'基础演示'}
          code={`
\`\`\`jsx
<o-dialog visible={this.visibleA} title="提示">
  <span>你还，omiu dialog</span>
  <span slot="footer">
    <o-button size="small">取 消</o-button>
    <o-button size="small" type="primary">确 定</o-button>
  </span>
</o-dialog>
\`\`\`
          `}
        >
          <div slot="demo" class={tw`px-5 py-5`}>

            <o-dialog visible={this.visibleA} title="提示">
              <span>你还，omiu dialog</span>
              <span slot="footer">
                <o-button size="small" onClick={e => {
                  this.visibleA = false
                  this.update()
                }}>取 消</o-button>
                <o-button size="small" onClick={e => {
                  this.visibleA = false
                  this.update()
                }} type="primary">确 定</o-button>
              </span>
            </o-dialog>
            <o-button onClick={e => {
              this.visibleA = true
              this.update()
            }} value="4" max="10" color="red">显示弹窗</o-button>
          </div>
        </code-demo>



        <code-demo
          title="弹窗"
          describe={'基础演示'}
          code={`
\`\`\`jsx
<o-button onClick={e => {
  alert({
    msg: 'Simple Message',
    title: 'Msg',
    confirmButtonText: 'OK',
    onConfirm: function () {
      console.log('ok')
    }
  })
}} type="default">alert</o-button>

<o-button onClick={e => {
  confirm({
    msg: 'Simple Message',
    title: 'Msg',
    cancelButtonText: 'Cancel',
    confirmButtonText: 'OK',
    onCancel: function () {

    },
    onConfirm: function () {
      console.log('ok')
    }
  })
}} type="default">confirm</o-button>

<o-button onClick={e => {
  prompt({
    msg: 'Simple Message',
    title: 'Msg',
    cancelButtonText: 'Cancel',
    confirmButtonText: 'OK',
    onCancel: function () {

    },
    onConfirm: function (val) {
      console.log(val)
    }
  })
}} type="default">prompt</o-button>
\`\`\`
          `}
        >
          <div slot="demo" class={tw`px-5 py-5`}>
            <o-button onClick={e => {
              alert({
                msg: 'Simple Message',
                title: 'Msg',
                confirmButtonText: 'OK',
                onConfirm: function () {
                  console.log('ok')
                }
              })
            }} type="default">alert</o-button>
            <o-button onClick={e => {
              confirm({
                msg: 'Simple Message',
                title: 'Msg',
                cancelButtonText: 'Cancel',
                confirmButtonText: 'OK',
                onCancel: function () {

                },
                onConfirm: function () {
                  console.log('ok')
                }
              })
            }} type="default">confirm</o-button>
            <o-button onClick={e => {
              prompt({
                msg: 'Simple Message',
                title: 'Msg',
                cancelButtonText: 'Cancel',
                confirmButtonText: 'OK',
                onCancel: function () {

                },
                onConfirm: function (val) {
                  console.log(val)
                }
              })
            }} type="default">prompt</o-button>
          </div>
        </code-demo>

      </code-demo-container>
    )
  }
}
