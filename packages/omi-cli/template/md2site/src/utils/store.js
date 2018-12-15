import config from '../docs/config.js'

class AppStore {
  constructor(data, isReady) {
    /*
     this.data =
     {
         html: '<h1>hello</h1>',
         md: 'components'
         lan: 'cn',
         menus:[
             {
                 active: true,
                 title: '���ٿ�ʼ',
                 currentIndex: 0,
                 list: [
                     {name: '��װ', md: 'installation', index: 0, active: true},
                     {name: '���', md: 'components'},
                     {name: '���ͨѶ', md: 'communication'}
                 ]
             }
         ]
     }
     */
    this.lan = 'en'
    this.md = 'installation'
    this.remarkable = new Remarkable({ html: true })
    this.html = this.remarkable.render(this.getMarkDown(this.md, this.lan))
    this.data = Object.assign({ menus: config.menus[data.lan] }, data)

    this.data.menus[0].list[0].selected = true

    let items = this.data.menus
    items.every(item => {
      if (item.active) {
        this.data.md = item.list[item.currentIndex].md
        return
      }
    })


    this.updatePager()
  }

  goto(md, index) {
    let items = this.data.menus
    items.every(item => {
      if (item.active) {
        this.data.md = md
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
    if (config.async) {
      this.asyncUpdate()
    } else {
      this.update()
      document.body.scrollTop = 0
    }
  }

  getMarkDown(name, lan) {
    return require('../docs/' + lan + '/' + name + '.md')
  }

  loadMarkdown(url, callback) {
    let xobj = new XMLHttpRequest()
    //xobj.overrideMimeType("application/json");
    xobj.open('GET', url, true) // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function() {
      if (xobj.readyState == 4 && xobj.status == '200') {
        // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
        callback(xobj.responseText)
      }
    }
    xobj.send(null)
  }

  asyncUpdate() {
    this.loadMarkdown(
      '../docs/' + this.data.lan + '/' + this.data.md + '.md',
      md => {
        this.data.html = this.md.render(md)
        this.update()
        document.body.scrollTop = 0
      }
    )
  }

  updatePager() {
    this.data.preMd = null
    this.data.preName = null
    this.data.nextMd = null
    this.data.nextName = null
    let menu = this.getCurrentMenu()

    let pre = menu.list[menu.currentIndex - 1]
    if (pre) {
      this.data.preMd = pre.md
      this.data.preName = pre.name
    }
    let next = menu.list[menu.currentIndex + 1]
    if (next) {
      this.data.nextMd = next.md
      this.data.nextName = next.name
    }
  }

  getCurrentMenu() {
    let menu = null

    let items = this.data.menus
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
