import { WeElement, h, tag } from 'omi'
import { tw, sheet } from 'omi-twind'
import { setTheme } from '@omiu/common'
import logo from '../../assets/logo.svg'
import '@omiu/avatar'
import '@omiu/icon/palette'
import '@omiu/select'
import '@omiu/icon/notifications'
import '@omiu/icon/settings'
import '@omiu/icon/git-hub'
import '@omiu/badge'

interface Props { }

const tagName = 'layout-header'
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

  store

  items = [{ label: '中文', value: 'zh' }, { label: 'English', value: 'en' }]

  isShowColorPicker: boolean = false

  install() {
    import('@omiu/color-picker')

    window.addEventListener('click', () => {
      this.isShowColorPicker = false
      //这个导致 o-hamburger-menu 的 active 二次执行传入 undefined,所以 onMenuChange里要记得改写 isLeftPanelClosed
      this.update()
    })
  }

  toggle = (evt) => {
    this.isShowColorPicker = !this.isShowColorPicker
    this.update()
    evt.stopPropagation()
  }

  onColorChange = (evt) => {
    this.store.themeColor = evt.detail.color
    setTheme('primary', evt.detail.color)
  }

  onItemSelect = (evt) => {
    this.store.setLocals(evt.detail.value)
  }

  goNotification = () => {
    // header-tabs是否存在‘通知中心’，存在则tab为Object
    const tab = this.store.tabs.find((tab) => tab.label === this.store.localeMap.base.NotificationList)

    // 如果tab栏无通知中心，则store push
    if (tab) {
      this.store.tabsActiveIndex = this.store.tabs.indexOf(tab)
      this.store.selectTreeNodeById(tab.id)
      location.hash = tab.href
    } else {
      const notificationTab = this.store.treeData.find((item) => item.label === this.store.localeMap.base.ManagerWorkbench).children.find((item) => item.label === this.store.localeMap.base.NotificationList)
      this.store.tabs.push(notificationTab)
      this.store.tabsActiveIndex = this.store.tabs.length - 1
      this.store.selectTreeNodeById(notificationTab.id)
      location.hash = notificationTab.href
    }
  }

  goPersonalCenter = () => {
    // 待页面搭建完成后开放
    // const tab = this.store.tabs.find((tab) => tab.label === this.store.localeMap.base.PersonalCenter)

    // if (tab) {
    //   this.store.tabsActiveIndex = this.store.tabs.indexOf(tab)
    //   this.store.selectTreeNodeById(tab.id)
    //   location.hash = tab.href
    // } else {
    //   const PersonalCenterTab = this.store.treeData.find((item) => item.label === this.store.localeMap.base.ManagerWorkbench).children.find((item) => item.label === this.store.localeMap.base.PersonalCenter)
    //   this.store.tabs.push(PersonalCenterTab)
    //   this.store.tabsActiveIndex = this.store.tabs.length - 1
    //   this.store.selectTreeNodeById(PersonalCenterTab.id)
    //   location.hash = PersonalCenterTab.href
    //   console.log(this.store)
    // }
  }

  render() {
    return (
      <div class={tw`bg-gray-100 h-12 text-left border-b-1`}>
        <div class={tw`flex justify-between`}>
          <div class={tw`flex flex-row p-1 order-1`}>
            <img class={tw`w-8 m-1 ml-3 flex-row`} src={logo} alt="logo" />
            <h1 class={tw`ml-3 leading-10 text-gray-500 flex-row whitespace-nowrap`}>OMI ADMIN</h1>
            <div class={tw`flex-row mt-1.5 ml-3`}>
              <o-select css={`
            .o-select .o-input__inner {
              width: 117px;
            `} size="mini"
                onItemSelect={this.onItemSelect}
                value={this.store.locale} items={this.items}>
              </o-select>
            </div>
          </div>

          <div class={tw`flex flex-row text-gray-500 gap-x-4 items-center order-3 p-1 mr-3`}>
            <div class={tw`flex-row hidden md:block`}>
              <div
                class={tw`cursor-pointer`}
                onClick={this.toggle}
                style={{ color: this.store.themeColor }}
              >
                <o-icon-palette></o-icon-palette>{this.store.localeMap.base.Theme}
              </div>
              {this.isShowColorPicker && (
                <o-color-picker
                  onchange={this.onColorChange}
                  onClick={(evt) => evt.stopPropagation()}
                  class={tw`absolute right-0 z-50`}
                  save={false}
                  preview={false}
                  button={false}
                  clear={false}
                  width="300px"
                ></o-color-picker>
              )}
            </div>

            <o-badge onClick={(e) => this.goNotification()}
              content="99"
              class={tw`flex-row cursor-pointer hidden md:block`}>
              <o-icon-notifications ></o-icon-notifications>
            </o-badge>

            <o-icon-settings class={tw`flex-row cursor-pointer hidden md:block`}></o-icon-settings>

            <a href="https://github.com/Tencent/omi" target="_blank" class={tw`flex-row`}><o-icon-git-hub ></o-icon-git-hub></a>

            <o-avatar onClick={(e) => this.goPersonalCenter()}
              class={tw`flex-row cursor-pointer`}
              src="https://wx.gtimg.com/resource/feuploader/202106/e685db3a4545b05f6fa05b4cbd0b25f0_420x420.png">
            </o-avatar>
          </div>
        </div>
      </div>
    )
  }
}
