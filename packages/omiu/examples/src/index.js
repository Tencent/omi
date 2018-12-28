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
import '../../src/msg'
import '../../src/equal-space'
import '../../src/selection'
import '../../src/slider'
import '../../src/switch'
import '../../src/omi-tree'

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
    this.alertShow = false
  }

  data = {
    selectedIndex: 2,
    selectedIndexs: [0, 1],
    percentage: 30,
    //defaultExpandedKeys: keys,   //默认展开 keys节点
    //defaultSelectedKeys: keys,  //默认选中(高亮) keys节点
    //defaultCheckedKeys: keys,  //默认Checked keys节点
    defaultExpandedKeys: [],
    defaultSelectedKeys: [],
    defaultCheckedKeys: [],
    expandedKeys: [],
    selectedKeys: [],
    checkedKeys: [],
    switchIt: true,
    treeData:[
        {title: 'dynamic 1', key: '0-0-0' ,level:1},
        {title: 'dynamic 2', key: '0-0-1' ,level:1}
    ],
    treeData2:[
        {title: 'edit',  key: '0-0-0' ,level:1,child:[
            {title: '子节点1', key: '0-0-0-0',level:2,child:[
                {title: '子子节点1', key: '0-0-0-0-1',level:3},
            ]},
            {title: '子节点2', key: '0-0-0-1',level:2},
        ]},
        {title: '父节点', key: '0-0-1',level:1,child:[
            {title: '子节点1', key: '0-0-1-0',level:2},
            {title: '子节点2', key: '0-0-1-1',level:2}
        ]}
    ]
  }

  onTapMore = () => {
    console.log(1)
  }

  onSelectSingle = e => {
    this.data.selectedIndex = e.detail.index
    this.update()
  }

  onSelect = e => {
    this.data.selectedIndexs = e.detail.indexs
    this.update()
  }

  navChange = index => {
    this.navIndex = index
    this.update()
  }

  tabChange = index => {
    this.tabIndex = index
    this.update()
  }

  closeDialog = () => {
    this.dialogShow = false
    this.update()
  }

  closeAlert = () => {
    this.alertShow = false
    this.update()
  }

  showDialog = () => {
    this.dialogShow = true
    this.update()
  }

  showAlert = () => {
    this.alertShow = true
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

  tabBarChange = index => {
    if (index === 3) {
      location.href = 'https://github.com/Tencent/omi'
    }
    this.tabBarIndex = index
    this.update()
  }

  render(props, data) {

    //先查出根节点
    function findRoot(treeData) {
      var nodeStr=treeData.map(function(node){
        return (
            <tree-node title={node.title} key={node.key}>{findChild(node)}</tree-node>
        );
      });
      return nodeStr;
    }
    //循环递归展开树
    function findChild(node){
      if(node!=null){
        if(node.child!=null){
          var str=node.child.map(function(n){
            return(
                <tree-node title={n.title} key={n.key}>{findChild(n)}</tree-node>
            );
          })
          return str;
        }
      }
    }

    var dynamicNodeList=(
      <tree-node title="根节点" key="0-0">
        {findRoot(this.data.treeData)}
      </tree-node>
    );

    var treeNodeList=(
      <tree-node title="根节点" key="0-0">
        {findRoot(this.data.treeData2)}
      </tree-node>
    );

    const animation = {
      enter(node, done) {
        return animate(node, true, done);
      },
      leave(node, done) {
        return animate(node, false, done);
      },
      appear(node, done) {
        return animate(node, true, done);
      }
    };

    const customLabel = (
      <span className="cus-label">
        <span>operations </span>
      </span>
    );
    
    return (
      <div class="ctn">
        <o-button
          onClick={() => {
            console.log(1)
          }}
        >
          Normal
        </o-button>
        <o-button disabled>Disabled</o-button>

        <o-button type="default">Secondary Normal</o-button>
        <o-button type="default" disabled>
          Secondary Disabled
        </o-button>

        <o-button type="warn">Warn Normal</o-button>
        <o-button type="warn" disabled>
          Disabled
        </o-button>

        <o-button type="primary" plain>
          o-button
        </o-button>
        <o-button type="primary" plain disabled>
          o-button
        </o-button>
        <o-button type="default" plain>
          o-button
        </o-button>

        <o-equal-space>
          <o-button size="small">Mini</o-button>
          <o-button type="default" size="small">
            Mini
          </o-button>
          <o-button type="warn" size="small">
            Mini
          </o-button>
        </o-equal-space>
        <br></br>
        <o-equal-space>
          <o-pagination
            total={25}
            currentPage={2}
            pageSize={5}
            onChange={this.onChange}
          />
        </o-equal-space>
        <br />
        <o-equal-space>
          <o-adjustment
            onChange={this.onAdjustmentChange}
            min={1}
            max={10}
            step={1}
            value={2}
            label="描述文字"
          />
        </o-equal-space>
        <br />
        <o-progress bgColor="#ccc" innerColor="#07C160" value={50} />

        <br />
        <o-timeline />

        <br />

        <o-nav onChange={this.navChange}>
          <item active={this.navIndex === 0}>我的项目</item>
          <item active={this.navIndex === 1}>所有项目</item>
        </o-nav>

        <br />
        <br />
        <o-icon type="loading" rotate isFill />
        <o-icon type="close" isFill />
        <o-icon type="pay" isFill />
        <o-icon type="chat" isFill />
        <o-icon type="scan" isFill />
        <o-icon type="add-friend" isFill />
        <br />
        <br />

        <o-equal-space>
          <o-icon type="loading" rotate isFill>
            Loading
        </o-icon>
          <o-icon type="close" isFill>
            Close
        </o-icon>
          <o-icon type="pay" isFill>
            Pay
        </o-icon>
        </o-equal-space>
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
          <o-icon type="chat" isFill color="#07C160" />
        </o-badge>
        <br />
        <br />
        <o-badge number={99}>
          <o-icon type="pay" isFill color="#07C160" />
        </o-badge>
        <br />
        <br />
        <o-badge>
          <o-icon type="chat" isFill color="#07C160" />
        </o-badge>
        <br />
        <br />
        <o-input class="o-input" placeholder="请输入用户名" />

        <br />
        <br />

        <o-equal-space>
          <o-button size="small" onClick={this.showPopup}>
            显示弹窗
          </o-button>
          <o-button size="small" onClick={this.showDialog}>
            Confirm
          </o-button>
          <o-button size="small" onClick={this.showAlert}>
            Alert
          </o-button>
        </o-equal-space>
        <o-popup
          onClose={this.closePopup}
          onConfirm={this.onConfirm}
          show={this.popupShow}
        >
          <div>我是内容</div>
          <div>我是内容</div>
          <div>我是内容</div>
          <div>我是内容</div>
        </o-popup>

        <o-dialog
          title="信息确认"
          content="确认支付？"
          onConfirm={this.closeAlert}
          show={this.alertShow}
        />

        <o-dialog
          title="信息确认"
          type="confirm"
          content="确认支付？"
          onClose={this.closeDialog}
          onConfirm={this.onConfirm}
          show={this.dialogShow}
        />

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
        <o-equal-space><o-loading size="40px" /></o-equal-space>
        <br />
        <br />
        <o-msg type="success" title="提示" content="欢迎使用 Omiu" />

        <div>
          <br />
          <br />
          <o-selection
            items={[{ text: 'item1' }, { text: 'item2' }, { text: 'item3' }]}
            selectedIndex={data.selectedIndex}
            single
            onTapMore={this.onTapMore}
            onSelect={this.onSelectSingle}
          />

          <br />
          <br />
          <o-selection
            selectedIndexs={data.selectedIndexs}
            items={[{ text: 'item1' }, { text: 'item2' }, { text: 'item3' }]}
            onSelect={this.onSelect}
          />
        </div>
        <br />
        <br />
        <o-slider disabled />

        <o-slider
          onChange={this.onSliderChange}
          percentage={this.data.percentage}
        />

        <o-equal-space>
          <o-switch onChange={this.onChangeB} checked={false}>
          </o-switch>
        </o-equal-space>

        <o-equal-space>
          <o-switch onChange={this.onChangeA} checked={true}>
          </o-switch>
        </o-equal-space>

        <h2>基础树</h2>
        <o-tree
            className="myCls" showLine checkable
            defaultExpandedKeys={this.data.defaultExpandedKeys}
            onExpand={this.onExpand}
            defaultSelectedKeys={this.data.defaultSelectedKeys}
            defaultCheckedKeys={this.data.defaultCheckedKeys}
            onSelect={this.onSelect} onCheck={this.onCheck}
            // openAnimation={animation}
            >
            <tree-node title="parent 1" key="0-0">
                <tree-node title={customLabel} key="0-0-0">
                    <tree-node title="leaf" key="0-0-0-0" />
                    <tree-node title="leaf" key="0-0-0-1" />
                </tree-node>
                <tree-node title="parent 1-1" key="0-0-1">
                    <tree-node title="parent 1-1-0" key="0-0-1-0" />
                    <tree-node title="parent 1-1-1" key="0-0-1-1" />
                </tree-node>
            </tree-node>
        </o-tree>

        <br />
        <br />
        <br />
        <br />

        <br />
        <o-tab-bar onChange={this.tabBarChange} index={this.tabBarIndex}>
          <o-badge number={8}>
            <o-icon
              type="pay"
              isFill={this.tabBarIndex === 0}
              color={this.tabBarIndex === 0 ? '#07C160' : '#070707'}
            >
              支付
            </o-icon>
          </o-badge>
          <o-badge number={99}>
            <o-icon
              type="chat"
              isFill={this.tabBarIndex === 1}
              color={this.tabBarIndex === 1 ? '#07C160' : '#070707'}
            >
              消息
            </o-icon>
          </o-badge>
          <o-badge dot>
            <o-icon
              type="add-friend"
              isFill={this.tabBarIndex === 2}
              color={this.tabBarIndex === 2 ? '#07C160' : '#070707'}
            >
              好友
            </o-icon>
          </o-badge>
          <o-badge>
            <o-icon
              type="github"
              isFill={this.tabBarIndex === 3}
              color={this.tabBarIndex === 3 ? '#07C160' : '#070707'}
            >
              Omiu
            </o-icon>
          </o-badge>
        </o-tab-bar>
      </div>
    )
  }
  onChangeA = e => {
    console.log(e.detail)
  }

  onChangeB = e => {
    console.log(e.detail)
  }
  onSliderChange = e => {
    this.data.percentage = e.detail
    this.update()
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
