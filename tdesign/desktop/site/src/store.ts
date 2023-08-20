export default class Store {
  constructor(options) {
    this.ignoreAttrs = options.ignoreAttrs
    this.themeMode = options.themeMode || 'light'
    // 挂载ui，用于手动精准更新
    this.ui = { }
  }
}
