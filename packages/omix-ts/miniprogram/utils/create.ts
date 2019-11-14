/*!
 *  omix v2.4.0 by dntzhang
 *  Github: https://github.com/Tencent/omi
 *  MIT Licensed.
*/

import obaa from './obaa'
import { getPath, needUpdate, fixPath, getUsing } from './path'


interface StoreChangeCallback {
  (detail: any): void;
}

interface IPageScrollOption {
  /** 页面在垂直方向已滚动的距离（单位px） */
  scrollTop: number;
}

interface ITabItemTapOption {
  /** 被点击tabItem的序号，从0开始，最低基础库： `1.9.0` */
  index: string;
  /** 被点击tabItem的页面路径，最低基础库： `1.9.0` */
  pagePath: string;
  /** 被点击tabItem的按钮文字，最低基础库： `1.9.0` */
  text: string;
}

interface IShareAppMessageOption {
  /** 转发事件来源。
   *
   * 可选值：
   * - `button`：页面内转发按钮；
   * - `menu`：右上角转发菜单。
   *
   * 最低基础库： `1.2.4`
   */
  from: 'button' | 'menu' | string;
  /** 如果 `from` 值是 `button`，则 `target` 是触发这次转发事件的 `button`，否则为 `undefined`
   *
   * 最低基础库： `1.2.4` */
  target: any;
  /** 页面中包含`<web-view>`组件时，返回当前`<web-view>`的url
   *
   * 最低基础库： `1.6.4`
   */
  webViewUrl?: string;
}

interface ICustomShareContent {
  /** 转发标题。默认值：当前小程序名称 */
  title?: string;
  /** 转发路径，必须是以 / 开头的完整路径。默认值：当前页面 path */
  path?: string;
  /** 自定义图片路径，可以是本地文件路径、代码包文件路径或者网络图片路径。支持PNG及JPG。显示图片长宽比是 5:4，最低基础库： `1.5.0`。默认值：使用默认截图 */
  imageUrl?: string;
}

interface ComponentOption {
  [key: string]: any
}

interface Computed {
  [key: string]: any
}

interface PageOption {
  [key: string]: any,
  /**
   * 依赖 store 上的 path
   */
  use?: Array<string | object>
  /**
   * 计算属性
   */
  computed?: Computed,
  /** 生命周期回调—监听页面加载
   *
   * 页面加载时触发。一个页面只会调用一次，可以在 onLoad 的参数中获取打开当前页面路径中的参数。
   */
  onLoad?(
    /** 打开当前页面路径中的参数 */
    query?: { [queryKey: string]: string },
  ): void;
  /** 生命周期回调—监听页面显示
   *
   * 页面显示/切入前台时触发。
   */
  onShow?(): void;
  /** 生命周期回调—监听页面初次渲染完成
   *
   * 页面初次渲染完成时触发。一个页面只会调用一次，代表页面已经准备妥当，可以和视图层进行交互。
   *

   * 注意：对界面内容进行设置的 API 如`wx.setNavigationBarTitle`，请在`onReady`之后进行。
  */
  onReady?(): void;
  /** 生命周期回调—监听页面隐藏
   *
   * 页面隐藏/切入后台时触发。 如 `navigateTo` 或底部 `tab` 切换到其他页面，小程序切入后台等。
   */
  onHide?(): void;
  /** 生命周期回调—监听页面卸载
   *
   * 页面卸载时触发。如`redirectTo`或`navigateBack`到其他页面时。
   */
  onUnload?(): void;
  /** 监听用户下拉动作
   *
   * 监听用户下拉刷新事件。
   * - 需要在`app.json`的`window`选项中或页面配置中开启`enablePullDownRefresh`。
   * - 可以通过`wx.startPullDownRefresh`触发下拉刷新，调用后触发下拉刷新动画，效果与用户手动下拉刷新一致。
   * - 当处理完数据刷新后，`wx.stopPullDownRefresh`可以停止当前页面的下拉刷新。
   */
  onPullDownRefresh?(): void;
  /** 页面上拉触底事件的处理函数
   *
   * 监听用户上拉触底事件。
   * - 可以在`app.json`的`window`选项中或页面配置中设置触发距离`onReachBottomDistance`。
   * - 在触发距离内滑动期间，本事件只会被触发一次。
   */
  onReachBottom?(): void;
  /** 用户点击右上角转发
   *
   * 监听用户点击页面内转发按钮（`<button>` 组件 `open-type="share"`）或右上角菜单“转发”按钮的行为，并自定义转发内容。
   *
   * **注意：只有定义了此事件处理函数，右上角菜单才会显示“转发”按钮**
   *
   * 此事件需要 return 一个 Object，用于自定义转发内容
   */
  onShareAppMessage?(
    /** 分享发起来源参数 */
    options?: IShareAppMessageOption,
  ): ICustomShareContent;
  /** 页面滚动触发事件的处理函数
   *
   * 监听用户滑动页面事件。
   */
  onPageScroll?(
    /** 页面滚动参数 */
    options?: IPageScrollOption,
  ): void;

  /** 当前是 tab 页时，点击 tab 时触发，最低基础库： `1.9.0` */
  onTabItemTap?(
    /** tab 点击参数 */
    options?: ITabItemTapOption,
  ): void;

  /** 窗口尺寸改变时触发，最低基础库：`2.4.0` */
  onResize?(
    /** 窗口尺寸参数 */
    options?: IResizeOption,
  ): void;
}

interface IResizeOption {
  size: {
    /** 变化后的窗口宽度，单位 px */
    windowWidth: number;
    /** 变化后的窗口高度，单位 px */
    windowHeight: number;
  };
}

function create(store: any | ComponentOption, option?: PageOption) {
  if (arguments.length === 2) {
    if (!store.instances) {
      store.instances = {}
    }

    if (!store.__changes_) {
      store.__changes_ = []
    }

    const changes = store.__changes_
    if (!store.onChange) {
      store.onChange = function (fn: StoreChangeCallback) {
        changes.push(fn)
      }
    }

    if (!store.offChange) {
      store.offChange = function (fn: StoreChangeCallback) {
        for (let i = 0, len = changes.length; i < len; i++) {
          if (changes[i] === fn) {
            changes.splice(i, 1)
            break
          }
        }
      }
    }

    const hasData = typeof option.data !== 'undefined'
    let clone
    if (option.data) {
      clone = JSON.parse(JSON.stringify(option.data))
      option.data.$ = store.data
    } else {
      option.data = store.data
    }
    observeStore(store)
    const onLoad = option.onLoad
    const onUnload = option.onUnload

    option.onLoad = function (e) {
      this.store = store

      option.use && (this.__updatePath = getPath(option.use))
      this.__use = option.use
      this.__hasData = hasData
      if (hasData) {
        Object.assign(option.data, JSON.parse(JSON.stringify(clone)))
      }
      store.instances[this.route] = store.instances[this.route] || []
      store.instances[this.route].push(this)
      this.computed = option.computed
      this.setData(option.data)
      const using = getUsing(store.data, option.use)

      option.computed && compute(option.computed, store, using, this)
      this.setData(using)

      onLoad && onLoad.call(this, e)
    }

    option.onUnload = function (e) {
      store.instances[this.route] = store.instances[this.route].filter(ins => ins !== this)
      onUnload && onUnload.call(this, e)
    }

    Page(option)
  } else {
    store.lifetimes = store.lifetimes || {}
    const ready = store.lifetimes.ready || store.ready

    store.ready = store.lifetimes.ready = function () {
      const page = getCurrentPages()[getCurrentPages().length - 1]
      store.use && (this.__updatePath = getPath(store.use))
      this.store = page.store
      this.__use = store.use

      this.computed = store.computed
      store.data = this.store.data
      this.setData(store.data)
      const using = getUsing(this.store.data, store.use)

      store.computed && compute(store.computed, this.store, using, this)
      this.setData(using)

      page._omixComponents = page._omixComponents || []
      page._omixComponents.push(this)
      ready && ready.call(this)
    }
    Component(store)
  }
}

create.Page = function (store: any, option?: PageOption) {
  create(store, option)
}

create.Component = function (store: any | ComponentOption, option?: ComponentOption) {
  if (arguments.length === 2) {
    if (!store.instances) {
      store.instances = {}
    }

    if (!store.__changes_) {
      store.__changes_ = []
    }

    const changes = store.__changes_
    if (!store.onChange) {
      store.onChange = function (fn) {
        changes.push(fn)
      }
    }

    if (!store.offChange) {
      store.offChange = function (fn) {
        for (let i = 0, len = changes.length; i < len; i++) {
          if (changes[i] === fn) {
            changes.splice(i, 1)
            break
          }
        }
      }
    }
    const hasData = typeof option.data !== 'undefined'
    let clone
    if (option.data) {
      clone = JSON.parse(JSON.stringify(option.data))
      option.data.$ = store.data
    } else {
      option.data = store.data
    }
    observeStore(store)

    const detached = option.detached

    option.lifetimes = option.lifetimes || {}
    const created = option.lifetimes.created || option.created
    const ready = option.lifetimes.ready || option.ready

    option.created = option.lifetimes.created = function (e) {
      this.store = store

      option.use && (this.__updatePath = getPath(option.use))
      this.__use = option.use
      this.__hasData = hasData
      if (hasData) {
        Object.assign(option.data, JSON.parse(JSON.stringify(clone)))
      }

      created && created.call(this, e)
    }

    option.ready = option.lifetimes.ready = function (e) {
      const store = this.store
      store.instances[this.route] = store.instances[this.route] || []
      store.instances[this.route].push(this)
      this.computed = option.computed
      this.setData(option.data)
      const using = getUsing(store.data, option.use)

      option.computed && compute(option.computed, store, using, this)
      this.setData(using)

      ready && ready.call(this, e)
    }

    option.lifetimes.detached = option.detached = function (e) {
      this.store.instances[this.route] = this.store.instances[this.route].filter(ins => ins !== this)
      detached && detached.call(this, e)
    }

    Component(option)
  } else {
    store.lifetimes = store.lifetimes || {}
    const ready = store.lifetimes.ready || store.ready

    store.ready = store.lifetimes.ready = function () {
      const page = getCurrentPages()[getCurrentPages().length - 1]
      store.use && (this.__updatePath = getPath(store.use))
      this.store = page.store
      this.__use = store.use
      this.computed = store.computed
      store.data = this.store.data
      this.setData(store.data)
      const using = getUsing(this.store.data, store.use)

      store.computed && compute(store.computed, this.store, using, this)
      this.setData(using)

      page._omixComponents = page._omixComponents || []
      page._omixComponents.push(this)
      ready && ready.call(this)
    }
    Component(store)
  }
}

function compute(computed, store, using, scope) {
  for (let key in computed) {
    using[key] = computed[key].call(store.data, scope)
  }
}

function observeStore(store) {
  const oba = obaa(store.data, (prop, value, old, path) => {
    let patch = {}
    if (prop.indexOf('Array-push') === 0) {
      let dl = value.length - old.length
      for (let i = 0; i < dl; i++) {
        patch[fixPath(path + '-' + (old.length + i))] = value[(old.length + i)]
      }
    } else if (prop.indexOf('Array-') === 0) {
      patch[fixPath(path)] = value
    } else {
      patch[fixPath(path + '-' + prop)] = value
    }

    _update(patch, store)


  })

  if (!store.set) {
    store.set = function (obj, prop, val) {
      obaa.set(obj, prop, val, oba)
    }
  }
}

function _update(kv, store) {
  for (let key in store.instances) {
    store.instances[key].forEach(ins => {
      _updateOne(kv, store, ins)
      if(ins._omixComponents){
        ins._omixComponents.forEach(compIns => {
          _updateOne(kv, store, compIns)
        })
      }
    })
  }
  store.__changes_.forEach(change => {
    change(kv)
  })
  store.debug && storeChangeLogger(store, kv)
}

function _updateOne(kv, store, ins){
  if (store.updateAll || ins.__updatePath && needUpdate(kv, ins.__updatePath)) {
    if (ins.__hasData) {
      const patch = Object.assign({}, kv)
      for (let pk in patch) {
        if (!/\$\./.test(pk)) {
          patch['$.' + pk] = kv[pk]
          delete patch[pk]
        }
      }
      ins.setData.call(ins, patch)
    } else {
      ins.setData.call(ins, kv)
    }

    const using = getUsing(store.data, ins.__use)

    compute(ins.computed, store, using, ins)
    ins.setData(using)


  }
}

function storeChangeLogger(store, diffResult) {
  try {
    const preState = wx.getStorageSync(`CurrentState`) || {}
    const title = `Data Changed`
    console.groupCollapsed(`%c  ${title} %c ${Object.keys(diffResult)}`, 'color:#e0c184; font-weight: bold', 'color:#f0a139; font-weight: bold')
    console.log(`%c    Pre Data`, 'color:#ff65af; font-weight: bold', preState)
    console.log(`%c Change Data`, 'color:#3d91cf; font-weight: bold', diffResult)
    console.log(`%c   Next Data`, 'color:#2c9f67; font-weight: bold', store.data)
    console.groupEnd()
    wx.setStorageSync(`CurrentState`, store.data)
  } catch (e) {
    console.log(e)
  }

}

create.obaa = obaa


export default create
