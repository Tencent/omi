import config from '../docs/config.js'
import 'omi-router'

class Store {
  constructor(data) {
    this.data = {
      position: [-1, -1],
      menus: config.menus,
      lan: data.lan,
      html: '',
      sideBarShow: window.innerWidth > 768
    }



    this.preIndex = 0
    this.preSubIndex = 0

  }

  init(){
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
    this.sideBarShow = !this.sideBarShow
    this.mySidebar.update()
  }

  hideSidebar() {
    this.sideBarShow = false
    this.mySidebar.update()
  }

  initRouter() {
    const menus  = this.data.menus[this.data.lan]
    menus.forEach(item => {
      item.list.forEach(subItem => {
        route('/' + subItem.md, evt => {
          menus[this.preIndex].list[this.preSubIndex].selected = false
          this.preIndex = evt.query.index
          this.preSubIndex = evt.query.subIndex
          this.data.position = [Number(evt.query.index), Number( evt.query.subIndex)]
          this.sideBarShow = false

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

export default Store
