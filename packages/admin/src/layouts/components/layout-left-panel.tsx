import { WeElement, h, tag } from 'omi'
import { tw, sheet } from 'omi-twind'
import '@omiu/tree'
import '@omiu/hamburger-menu'
import '@omiu/tooltip'

interface Props { }

const tagName = 'layout-left-panel'
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName]: Omi.Props & Props
    }
  }
}

@tag(tagName)
export default class extends WeElement<Props> {
  static css = [
    sheet.target,
    `.menu {
  position: absolute;
  cursor: pointer;
  background-color: #acb7c1;
  height: 50px;
  line-height: 50px;
  text-align: center;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  width: 8px;
  bottom: 0;
  margin-top: -25px;
  right: -8px;
  z-index: 999;
}

.menu svg {
  font-size: 10px;
  display: inline-block;
  position: relative;
  top: -2px;
  right: 1px;
}

.menu.closed svg {
  transform: rotate(180deg);
}`
  ]

  install() {
    import('@omiu/icon/emoji-people')
    import('@omiu/icon/ballot')
  }

  store

  /**
   * 节点被点击
   * @param evt
   */
  onNodeClick = (evt: CustomEvent) => {
    if (!evt.detail.children) {
      const tab = this.store.tabs.find((tab) => tab.id === evt.detail.id)
      if (tab) {
        this.store.tabsActiveIndex = this.store.tabs.indexOf(tab)
      } else {
        this.store.tabs.push({
          label: evt.detail.label,
          closeable: false,
          id: evt.detail.id,
          href: evt.detail.href
        })
        this.store.tabsActiveIndex = this.store.tabs.length - 1
      }
    }
    evt.detail.md &&
      evt.detail.md.then((e) => {
        this.store.markdown = e.default
      })
  }

  installed() {
    this.store.ui.leftPanel = this
  }

  onMenuChange = (evt) => {
    this.store.isLeftPanelClosed = evt.detail
    if (this.store.isLeftPanelClosed) {
      this.store.openLeftPanel()
    } else {
      this.store.closeLeftPanel()
    }
  }

  render() {
    return (
      <div style={`height:calc(100vh - 3rem)`} class={tw`text-left relative`}>
        <o-hamburger-menu
          title="隐藏导航树"
          style="right:-2.5px"
          class={tw`absolute scale-50 z-10 top-2`}
          color="rgb(107, 114, 128)"
          active={!this.store.isLeftPanelClosed}
          onchange={this.onMenuChange}
        ></o-hamburger-menu>

        <o-tree
          class={tw`pb-40`}
          onNodeClick={this.onNodeClick}
          nodeHeight={42}
          data={this.store.treeData}
        ></o-tree>

        {/* <div
          class={classNames({
            menu: true,
            closed: this.store.isLeftPanelClosed
          })}
          onclick={(e) => {
            this.store.toggleLeftPanel()
          }}

        >
          <svg
            aria-hidden="true"
            data-icon="left"
            fill="white"
            focusable="false"
            height="1em"
            viewBox="64 64 896 896"
            width="1em"
          >
            <path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 0 0 0 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z" />
          </svg>
        </div> */}
      </div>
    )
  }
}
