import config from '../docs/config.js'

class AppStore {
  constructor() {
    this.lan = config.lan
    this.menus = config.menus[this.lan]
    this.md = this.menus[0].list[0].md
    this.remarkable = new Remarkable({ html: true })
    this.getMarkDown(this.md, this.lan, m => {
      this.html = this.remarkable.render(m)
      this.myContent.update()
    })

    this.menus[0].active = true
    this.menus[0].currentIndex = 0
    this.menus[0].list[0].selected = true

    this.updatePager()
  }

  goto(md, index) {
    let items = this.menus
    items.every(item => {
      if (item.active) {
        this.md = md
        item.currentIndex = index

        item.list.forEach((listItem, currentIndex) => {
          if (currentIndex === index) {
            listItem.selected = true
          } else {
            listItem.selected = false
          }
        })

        return
      }
    })
    this.updatePager()

    this.getMarkDown(this.md, this.lan, m => {
      this.html = this.remarkable.render(m)
      this.myContent.update()
      document.body.scrollTop = 0
    })
  }

  getMarkDown(name, lan, callback) {
    import('../docs/' + lan + '/' + name + '.md').then(m => {
      callback(m)
    })
  }

  updatePager() {
    this.preMd = null
    this.preName = null
    this.nextMd = null
    this.nextName = null
    let menu = this.getCurrentMenu()

    let pre = menu.list[menu.currentIndex - 1]
    if (pre) {
      this.preMd = pre.md
      this.preName = pre.name
    }
    let next = menu.list[menu.currentIndex + 1]
    if (next) {
      this.nextMd = next.md
      this.nextName = next.name
    }
  }

  getCurrentMenu() {
    let menu = null

    let items = this.menus
    items.every(item => {
      if (item.active) {
        menu = item
        return
      }
    })

    return menu
  }

  next() {
    let menu = this.getCurrentMenu()
    const len = menu.list.length
    menu.currentIndex++
    if (menu.currentIndex >= len) {
      menu.currentIndex = len - 1
    }
    this.goto(menu.list[menu.currentIndex].md, menu.currentIndex)
  }

  pre() {
    let menu = this.getCurrentMenu()
    menu.currentIndex--
    if (menu.currentIndex < 0) {
      menu.currentIndex = 0
    }
    this.goto(menu.list[menu.currentIndex].md, menu.currentIndex)
  }
}

export default new AppStore({ lan: 'cn' })
