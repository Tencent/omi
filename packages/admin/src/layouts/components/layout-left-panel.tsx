import { WeElement, h, tag, classNames } from 'omi'
import { tw, sheet } from 'omi-twind'
import '@omiu/tree'

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
  static css = [sheet.target,
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
  top: 40%;
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
}`]

  install() {
    import('@omiu/icon/emoji-people')
    import('@omiu/icon/ballot')
  }

  store

  onNodeClick = (evt) => {
    if (!evt.detail.children) {
      const tab = this.store.tabs.find(tab => tab.id === evt.detail.id)
      if (tab) {
        this.store.tabsActiveIndex = this.store.tabs.indexOf(tab)
      } else {
        this.store.tabs.push({ label: evt.detail.label, closeable: false, id: evt.detail.id, href: evt.detail.href })
        this.store.tabsActiveIndex = this.store.tabs.length - 1
      }
    }
  }

  toggleSidePanel = () => { }

  isClosed: boolean = false

  render() {
    return (
      <div style={`height:calc(100vh - 3rem)`} class={tw`text-left border-r-1 relative`}>
        <o-tree onnode-click={this.onNodeClick} data={this.store.treeData}></o-tree>

        <div
          class={classNames({ 'menu': true, closed: this.isClosed })}
          onclick={this.toggleSidePanel}
          v-if="!state.leftPanelIconHided"
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
            <path
              d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 0 0 0 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"
            />
          </svg>
        </div>
      </div>
    )
  }
}
