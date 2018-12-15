let gulp = require('gulp')
let path = require('path')
let tap = require('gulp-tap')
let compile = require('./scripts/mp/index')
let fs = require('fs')
let compileWxss = require('./scripts/mp/wxss')

gulp.task('components', ['copy'], () => {
  return gulp
    .src('src/mp/components/*/*.js')
    .pipe(
      tap(file => {
        let dir = path.dirname(file.path)
        let arr = dir.split(/\\|\//)
        let name = arr[arr.length-1]
        if(path.basename(file.path) == name+'.js') {
          let wxml = fs.readFileSync(dir + '/' + name + '.wxml', 'utf8')
          let json = require(dir + '/' + name + '.json')
          let importStr = json2import(json)
          let hyperscript = compile(wxml)
          file.contents = Buffer.concat([
            new Buffer(
              `${importStr}import componentCss from './${name}.wxss'
import { h, WeElement, rpx } from 'omi'
import { setData } from '../../../utils/set-data'

  `
            ),
            new Buffer(
              file.contents
                .toString()
                .replace('Component({', 
                `const mpOption = function () {
  return ({`)+`
}`),
            new Buffer(`
class Element extends WeElement {
  static props = mpOption().properties

  data = mpOption().data

  render = render

  css = css

  beforeRender() {}

  beforeUpdate() {}

  afterUpdate() {}

  install = function() {
    this.properties = this.props
    this._mpOption = mpOption()
    this._mpOption.created && this._mpOption.created.call(this)
    Object.keys(this._mpOption.methods).forEach(key => {
      if(typeof this._mpOption.methods[key] === 'function'){
        this[key] = this._mpOption.methods[key].bind(this)
      }
    })
  }

  uninstall = mpOption().detached || function() {}

  installed = function() {
    this._mpOption.attached && this._mpOption.attached.call(this)
    this._mpOption.ready && this._mpOption.ready.call(this)
  }

  adoptedCallback = mpOption().moved || function() {}

  triggerEvent = function(name, data) {
    this.fire(name, data)
  }

  setData = setData
}

function css() {
  return rpx(componentCss)
}

${hyperscript}

customElements.define('${name}', Element)
          `)
          ])
        }
      })
    )
    .pipe(gulp.dest('src/mp/components/'))
})

gulp.task('copy', () => {
  return gulp.src('src-mp/**/*').pipe(gulp.dest('src/mp'))
})

gulp.task('pages', ['copy'], () => {
  return gulp
    .src('src/mp/pages/*/*.js')
    .pipe(
      tap(file => {
        let dir = path.dirname(file.path)
        let arr = dir.split(/\\|\//)
        let name = arr[arr.length-1]
        if(path.basename(file.path) == name+'.js') {
          let wxml = fs.readFileSync(dir + '/' + name + '.wxml', 'utf8')
          let hyperscript = compile(wxml)
          let json = require(dir + '/' + name + '.json')
          let importStr = json2import(json)
          file.contents = Buffer.concat([
            new Buffer(
              `${importStr}import appCss from '../../app.wxss'
import pageCss from './${name}.wxss'
import { h, WeElement, rpx } from 'omi'
import { setData } from '../../../utils/set-data'

  `
            ),
            new Buffer(
              file.contents
                .toString()
                .replace('Page({', 
`const mpOption = function () {
  return ({`)+`
}`
            ),
            new Buffer(`
class Element extends WeElement {
  data = mpOption().data

  render = render

  css = css

  beforeRender() {}

  beforeUpdate() {}

  afterUpdate() {}

  install() {
    this.properties = this.props
    this._mpOption = mpOption()
    Object.keys(this._mpOption).forEach(key => {
      if (typeof this._mpOption[key] === 'function') {
        Element.prototype[key] = this._mpOption[key].bind(this)
      }
    })
  }

  uninstall = mpOption().onUnload || function() {}

  installed = function() {
    this._mpOption.onLoad && this._mpOption.onLoad.call(this, route.query)
    this._mpOption.onReady && this._mpOption.onReady.call(this, route.query)

    this._mpOption.onReachBottom && wx._bindReachBottom(this._mpOption.onReachBottom, this)
  }

  setData = setData
}

function css() {
  return rpx(appCss + pageCss)
}

${hyperscript}

customElements.define('we-${name}', Element)
          `)
          ])
        }
      })
    )
    .pipe(gulp.dest('src/mp/pages/'))
})

gulp.task('appjs', ['copy'], () => {
  return gulp
    .src('src-mp/app.js')
    .pipe(
      tap(file => {
        let list = walk('src-mp/pages')
        file.contents = Buffer.concat([
          file.contents,
          new Buffer(list2require(list))
        ])
      })
    )
    .pipe(gulp.dest('src/mp'))
})

gulp.task('copyThen', () => {
  gulp.src('src-mp/**/*').pipe(gulp.dest('src/mp')).on('end', function(){
    gulp.start(['components', 'app-wxss', 'pages-wxss', 'components-wxss', 'pages', 'appjs', 'route'])
  })
})

gulp.task('watch', () => {
  gulp.watch('src-mp/**/*', () => {
    gulp.start('copyThen')
  })
})

gulp.task('route', ['copy'], (cb) => {
  let json = require('./src/mp/app.json')
  //fs.unlinkSync('./src/index.js')

  fs.writeFile('./src/index.js', `import 'omi-router'
import { routeUpdate } from './utils/mp'
import './mp/app'

const root = document.querySelector('#root')

route('*', evt => {
  title('index')
  routeUpdate(<we-index />, 'we-index', evt.byNative, root)
})

${route(json.pages)}

window.onscroll = function(){
  root.childNodes.forEach(child => {
    if(child.style.display !== 'none'){
      child._preScrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
    }
  })
}

function title(value) {
  document.title = value
}
    `, cb);

})

function route(arr) {
  let result = []
  arr.forEach(item => {
    const name = item.split('/')[1]
    result.push(`route('${item.replace('pages', '..')}', evt => {
  title('${name}')
  routeUpdate(<we-${name} />, 'we-${name}', evt.byNative, root)
})
`)
  })
  return result.join('\r\n')
}

function json2import(json) {
  let arr = []
  if (json.usingComponents) {
    Object.keys(json.usingComponents).forEach(key => {
      arr.push(`import '${json.usingComponents[key]}'`)
    })
  }
  return arr.join('\r\n') + '\r\n'
}

function list2require(list) {
  return (
    '\r\n' +
    list
      .map(item => {
        return `require('./pages/${item}/${item}')`
      })
      .join('\r\n')
  )
}

function walk(path) {
  let dirList = fs.readdirSync(path)
  let fileList = []
  dirList.forEach(item => {
    if (fs.statSync(path + '/' + item).isDirectory()) {
      fileList.push(item)
    }
  })

  return fileList
}


gulp.task('pages-wxss', ['copy'], () => {
  return gulp
    .src('src/mp/pages/*/*.wxss')
    .pipe(
      tap(file => {
        file.contents = new Buffer(compileWxss(file.contents.toString()))

      })
    )
    .pipe(gulp.dest('src/mp/pages/'))
})

gulp.task('components-wxss', ['copy'], () => {
  return gulp
    .src('src/mp/components/*/*.wxss')
    .pipe(
      tap(file => {
        file.contents = new Buffer(compileWxss(file.contents.toString()))

      })
    )
    .pipe(gulp.dest('src/mp/components/'))
})


gulp.task('app-wxss', ['copy'], () => {
  return gulp
    .src('src-mp/app.wxss')
    .pipe(
      tap(file => {
        file.contents = new Buffer(compileWxss(file.contents.toString()))

      })
    )
    .pipe(gulp.dest('src/mp'))
})

gulp.task('default', ['copy', 'components', 'app-wxss', 'pages-wxss', 'components-wxss', 'pages', 'appjs', 'route', 'watch'])
