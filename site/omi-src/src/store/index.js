import config from '../docs/config.js'
import 'omi-router'

class Store {
  constructor(data) {
    this.data = {
      position: [-1, -1],
      menus: config.menus,
      lan: data.lan,
      html: '',
      sideBarShow: false
    }
    let id = 0
    this.map = {}
    this.positionMap = {}
    config.menus[this.data.lan].forEach((menu, index) => {
      menu.list.forEach((item, subIndex) => {
        item.id = id++
        item.position = [index, subIndex]
        this.map[item.id] = item
        item.index = index
        item.subIndex = subIndex
        this.positionMap[index + '-' + subIndex] = item
      })
    })
    this.preIndex = 0
    this.preSubIndex = 0
  }

  getNext() {
    const item = this.positionMap[this.data.position.join('-')]
    if (item) {
      return this.map[item.id + 1]
    }
  }

  getPre() {
    const item = this.positionMap[this.data.position.join('-')]
    if (item) {
      return this.map[item.id - 1]
    }
  }

  init() {
    this.remarkable = new Remarkable({ html: true })
    if (location.hash === "") {
      this.data.position = [0, 0]
      this.getMarkDown(this.data.menus[this.data.lan][0].list[0].md, this.data.lan, m => {
        this.data.html = this.remarkable.render(m)
      })
    }
    this.initRouter()
  }

  toogleSidebar() {
    this.data.sideBarShow = !this.data.sideBarShow
  }

  hideSidebar() {
    this.data.sideBarShow = false
  }

  initRouter() {
    const menus = this.data.menus[this.data.lan]
    menus.forEach(item => {
      item.list.forEach(subItem => {
        route('/' + subItem.md, evt => {
          menus[this.preIndex].list[this.preSubIndex].selected = false
          const indexs = getIndexs(subItem.md, this.data.lan, config)
          this.preIndex = indexs[0]
          this.preSubIndex = indexs[1]
          this.data.position = [indexs[0], indexs[1]]
          this.data.sideBarShow = false

          this.getMarkDown(subItem.md, this.data.lan, m => {
            this.data.html = this.remarkable.render(m)
            document.body.scrollTop = 0
            document.documentElement.scrollTop = 0
          })
        })
      })
    })
  }

  getMarkDown(name, lan, callback) {
    import('../docs/' + lan + '/' + name + '.md').then(m => {
      callback(m)
    })
  }
}

function getIndexs(name, lan, config) {
  const menus = config.menus[lan]
  for (let i = 0, len = menus.length; i < len; i++) {
    for (let j = 0, sLen = menus[i].list.length; j < sLen; j++) {
      if (name === menus[i].list[j].md) {
        return [i, j]
      }
    }
  }
}


export default Store
