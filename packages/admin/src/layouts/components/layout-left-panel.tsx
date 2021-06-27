import { WeElement, h, tag } from 'omi'
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
  static css = sheet.target

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


  render() {
    return (
      <div style={`height:calc(100vh - 3rem)`} class={tw`text-left border-r-1`}>
        <o-tree onnode-click={this.onNodeClick} data={this.store.treeData}></o-tree>
      </div>
    )
  }
}
