class Store {
  constructor() {
    this.tabs = [{
      label: '欢迎',
      closable: false,
      id: 2
    }]
    this.tabsActiveIndex = 0
    this.ignoreAttrs = true
  }
}


export default new Store
