let gulp = require('gulp')
let path = require('path')
let tap = require('gulp-tap')
let compile = require('./scripts/mp/index')
let fs = require('fs')
let watch = require('gulp-watch')

gulp.task('components', ['copy'], () => {
  return gulp
    .src('src/mp/components/*/*.js')
    .pipe(
      tap(file => {
        let name = path.basename(file.path).replace('.js', '')
        let dir = path.dirname(file.path)
        let wxml = fs.readFileSync(dir + '/' + name + '.wxml', 'utf8')
        let json = require(dir + '/' + name + '.json')
        let importStr = json2import(json)
        let hyperscript = compile(wxml)
        file.contents = Buffer.concat([
          new Buffer(
            `${importStr}import componentCss from './${name}.wxss'
import { h, WeElement } from 'omi'
import { setData } from '../../../utils/set-data'


function css() {
  return rpx2px(componentCss)
}
` +
              hyperscript +
              '\r\n'
          ),
          new Buffer(
            file.contents
              .toString()
              .replace('Component({', 'const mpOption = Component({')
          ),
          new Buffer(`
class Element extends WeElement {
  data = mpOption.data

  render = render

  css = css

  beforeRender() {}

  beforeUpdate() {}

  afterUpdate() {}

  install() {}

  uninstall() {}

  installed() {}

  setData = setData
}

Object.keys(mpOption).forEach(key => {
  Element.prototype[key] = mpOption[key]
})

customElements.define('${name}', Element)
        `)
        ])
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
        let name = path.basename(file.path).replace('.js', '')
        let dir = path.dirname(file.path)
        let wxml = fs.readFileSync(dir + '/' + name + '.wxml', 'utf8')
        let hyperscript = compile(wxml)
        let json = require(dir + '/' + name + '.json')
        let importStr = json2import(json)
        file.contents = Buffer.concat([
          new Buffer(
            `${importStr}import appCss from '../../app.wxss'
import pageCss from './${name}.wxss'
import { h, WeElement } from 'omi'
import { setData } from '../../../utils/set-data'

function css() {
  return rpx2px(appCss + pageCss)
}
` +
              hyperscript +
              '\r\n'
          ),
          new Buffer(
            file.contents
              .toString()
              .replace('Page({', 'const mpOption = Page({')
          ),
          new Buffer(`
class Element extends WeElement {
  data = mpOption.data

  render = render

  css = css

  beforeRender() {}

  beforeUpdate() {}

  afterUpdate() {}

  install() {}

  uninstall() {}

  installed = mpOption.onLoad

  setData = setData
}

Object.keys(mpOption).forEach(key => {
  Element.prototype[key] = mpOption[key]
})

customElements.define('we-${name}', Element)
        `)
        ])
      })
    )
    .pipe(gulp.dest('src/mp/pages/'))
})

gulp.task('appjs', () => {
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

gulp.task('watch', () => {
  watch('src-mp/app.js', () => {
    gulp.start('appjs')
  })
})

gulp.task('default', ['copy', 'components', 'pages', 'appjs', 'watch'])

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
