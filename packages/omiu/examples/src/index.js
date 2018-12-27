import { define, render, WeElement } from 'omi'
import './assets/index.css'
import '../../src/pagination'
import '../../src/adjustment'
import '../../src/button'
import '../../src/progress'
import '../../src/timeline'
import '../../src/nav'
import '../../src/dialog'
import '../../src/icon'
import '../../src/tab'
import '../../src/menu'
import '../../src/badge'
import '../../src/input'
import '../../src/tab-bar'
import '../../src/popup'
import '../../src/list'
import '../../src/list-item'
import '../../src/loading'

define('my-app', class extends WeElement {
  onChange = v => {
    console.log('page' + v)
  }

  onAdjustmentChange = v => {
    console.log(v)
  }

  install() {
    this.navIndex = 0
    this.tabIndex = 0
    this.dialogShow = false
    this.tabBarIndex = 0
    this.popupShow = false
  }

  navChange = (index) => {
    this.navIndex = index
    this.update()
  }

  tabChange = (index) => {
    this.tabIndex = index
    this.update()
  }

  closeDialog = () => {
    this.dialogShow = false
    this.update()
  }

  showDialog = () => {
    this.dialogShow = true
    this.update()
  }

  closePopup = () => {
    this.popupShow = false
    this.update()
  }

  showPopup = () => {
    this.popupShow = true
    this.update()
  }


  onConfirm = () => {
    this.dialogShow = false
    this.update()
  }

  tabBarChange = (index) => {
    this.tabBarIndex = index
    this.update()
  }

  render() {
    return (
      <div class='ctn'>
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
        <o-button onClick={() => { console.log(1) }}>管理项目</o-button>
        <o-button type='disabled'>创建新项目</o-button>
        <br />

        <o-nav onChange={this.navChange}>
          <item active={this.navIndex === 0}>我的项目</item>
          <item active={this.navIndex === 1}>所有项目</item>
        </o-nav>


        <br />
        <br />
        <o-icon type='loading' rotate isFill></o-icon>
        <o-icon type='close' isFill></o-icon>
        <o-icon type='pay' isFill></o-icon>
        <o-icon type='chat' isFill></o-icon>
        <o-icon type='scan' isFill></o-icon>
        <o-icon type='add-friend' isFill></o-icon>
        <br />
        <br />
        <o-icon type='loading' rotate isFill>Loading</o-icon>
        <br />
        <br />
        <o-icon type='close' isFill>Close</o-icon>
        <br />
        <br />
        <o-icon type='pay' isFill>Pay</o-icon>
        <br />
        <br />

        <o-tab onChange={this.tabChange}>
          <item active={this.tabIndex === 0}>朋友相册</item>
          <item active={this.tabIndex === 1}>时刻视频</item>
        </o-tab>
        <br />
        <br />

        <o-menu onChange={this.tabChange}>
          <item active={this.tabIndex === 0}>朋友相册</item>
          <item active={this.tabIndex === 1}>时刻视频</item>
        </o-menu>

        <br />
        <o-badge number={8}>
          <o-icon type='chat' isFill color='#07C160'></o-icon>
        </o-badge>
        <br />
        <br />
        <o-badge number={99}>
          <o-icon type='pay' isFill color='#07C160'></o-icon>
        </o-badge>
        <br />
        <br />
        <o-badge>
          <o-icon type='chat' isFill color='#07C160'></o-icon>
        </o-badge>
        <br />
        <br />
        <o-input class='o-input' placeholder='请输入用户名' />


        <br />
        <br />
        <o-button onClick={this.showPopup}>显示弹窗</o-button>


        <o-popup onClose={this.closePopup} onConfirm={this.onConfirm} show={this.popupShow}>

          <div>我是内容</div>
          <div>我是内容</div>
          <div>我是内容</div>
          <div>我是内容</div>
        </o-popup>

        <br />
        <br />
        <o-button onClick={this.showDialog}>显示对话窗</o-button>


        <o-dialog title='信息确认' content='确认支付？' onClose={this.closeDialog} onConfirm={this.onConfirm} show={this.dialogShow}>

        </o-dialog>

        <br />
        <br />
        <o-button onClick={this.showDialog}>显示对话窗</o-button>


        <o-dialog title='信息确认' type='confirm' content='确认支付？' onClose={this.closeDialog} onConfirm={this.onConfirm} show={this.dialogShow}>

        </o-dialog>

        <br />
        <br />
        <o-list title="列表标题">
          <o-list-item
            icon="https://ws1.sinaimg.cn/large/0065Zy9egy1fxtdkt9566j305k05kdfs.jpg"
            title="Title"
            content="Content"
            access
          />
          <o-list-item
            icon="https://ws1.sinaimg.cn/large/0065Zy9egy1fxtdkt8yvmj305k05kweh.jpg"
            title="Title"
            content="Content"
            access
          />
        </o-list>
        <br />
        <br />

        <o-loading size="40px" />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <o-tab-bar onChange={this.tabBarChange} index={this.tabBarIndex}>
          <o-badge number={8}>
            <o-icon type='pay' isFill={this.tabBarIndex === 0} color={this.tabBarIndex === 0 ? '#07C160' : '#070707'}>支付</o-icon>
          </o-badge>
          <o-badge number={99}>
            <o-icon type='chat' isFill={this.tabBarIndex === 1} color={this.tabBarIndex === 1 ? '#07C160' : '#070707'}>消息</o-icon>
          </o-badge>
          <o-badge dot>
            <o-icon type='add-friend' isFill={this.tabBarIndex === 2} color={this.tabBarIndex === 2 ? '#07C160' : '#070707'}>好友</o-icon>
          </o-badge>
          <o-badge >
            <o-icon type='scan' isFill={this.tabBarIndex === 3} color={this.tabBarIndex === 3 ? '#07C160' : '#070707'}>扫描</o-icon>
          </o-badge>
        </o-tab-bar>



      </div>
    )
  }

  css() {
    return `
    .o-input{
       width: 180px;
    }
    .ctn{
      margin: 10px;
    }`
  }
})

render(<my-app />, 'body')