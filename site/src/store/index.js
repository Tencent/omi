import config from '../docs/config.js'
import 'omi-router'

class Store {
  constructor(data) {
    this.lan = data.lan
    this.menus = config.menus[this.lan]
    this.md = this.menus[0].list[0].md
    this.remarkable = new Remarkable({ html: true })
    if (location.hash === "") {
      this.getMarkDown(this.md, this.lan, m => {
        this.html = this.remarkable.render(m)
        this.myContent.update()
      })
    }

    this.menus[0].active = true
    this.menus[0].currentIndex = 0
    this.menus[0].list[0].selected = true
    this.demo = this.menus[0].list[0].demo
    this.initRouter()

    this.preIndex = 0
    this.preSubIndex = 0

    this.sideBarShow = window.innerWidth > 768
  }

  toogleSidebar() {
    this.sideBarShow = !this.sideBarShow
    this.mySidebar.update()
  }

  hideSidebar(){
    this.sideBarShow = false
    this.mySidebar.update()
  }

  initRouter() {
    this.menus.forEach(item => {
      item.list.forEach(subItem => {
        route('/' + subItem.md, evt => {
          this.menus[this.preIndex].list[this.preSubIndex].selected = false
          const item = this.menus[evt.query.index].list[evt.query.subIndex]
          item.selected = true
          this.myDemo.demo = item.demo
          this.myDemo.update()
          this.preIndex = evt.query.index
          this.preSubIndex = evt.query.subIndex
          this.sideBarShow = false
          this.mySidebar.update()
          this.getMarkDown(subItem.md, this.lan, m => {
            this.html = this.remarkable.render(m)
            this.myContent.update()
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
