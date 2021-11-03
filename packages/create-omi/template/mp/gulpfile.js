let gulp = require('gulp') 
let path = require('path')
let tap = require('gulp-tap')
let compile = require('./scripts/mp/index')
let fs = require('fs')
let compileWxss = require('./scripts/mp/wxss')
let prettier = require('prettier')
let postcss = require('gulp-postcss');
let autoprefixer = require('autoprefixer');
let cssnano = require('cssnano');
const os = require('os');

const WXCOMPONENT_ENV = 'WXCOMPONENT';
const isWxComponent = process.env.NODE_ENV === WXCOMPONENT_ENV;

const plugins = [
  autoprefixer({overrideBrowserslist: ['last 2 version', '>1%', 'ios 7']}),
  cssnano()
];

gulp.task('components', ['copy'], () => {
  const src = isWxComponent ? 'src/mp/components/**/*.js' : 'src/mp/components/*/*.js'; // 判断是否微信组件 

  return gulp
    .src(src)
    .pipe(
      tap(file => {
        let dir = isWxComponent ? file.path.replace('.js', '') : path.dirname(file.path)
        let arr = dir.split(/\\|\//)
        let name = arr[arr.length-1]
        let preName = arr[arr.length-2];

        try{
          if(path.basename(file.path) == name+'.js') {
            let filePathComponentDomStr = fileComponentDom(file.path);
            let contentPath = isWxComponent ? dir : dir + '/' + name;
            let wxml = fs.readFileSync(contentPath + '.wxml', 'utf8')
            let js = fs.readFileSync(contentPath + '.js', 'utf8')
            let json = require(contentPath + '.json')
            let importStr = json2import(json, dir)
            let hyperscript = compile(wxml)
            let componentWxss = isWxComponent ? fs.readFileSync('src/mp/component.wxss', 'utf8') : '';

            // 判断组件下面是不是压缩过 
            if(js.includes('webpackBootstrap')){
              return
            }

            file.contents = Buffer.concat([
              Buffer.from(
                `${importStr}import componentCss from './${name}.wxss'
  import { h, WeElement, rpx } from 'omi'
  import { setData, fixProps, helpInputEvent } from ${isWxComponent && preName === 'components' ? "'../../utils/helper'" : "'../../../utils/helper'"}

    `
              ),
              Buffer.from(
                file.contents
                  .toString()
                  .replace('Component({', 
                  `const mpOption = function () {
    return ({`)+`
  }`),
              Buffer.from(`
  class Element extends WeElement {
    static defaultProps = fixProps(mpOption().properties)

    data = mpOption().data

    render = render

    css = css

    beforeRender() {}

    beforeUpdate() {}

    afterUpdate() {}

    helpInputEvent = helpInputEvent;

    install = function() {
      this.properties = this.props
      Object.assign(this.data, JSON.parse(JSON.stringify(this.props)))
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
    return '${isWxComponent ? componentWxss.replace(/[\r\n]/g,"") : ""}' + rpx(componentCss)
  }

  ${prettier.format(hyperscript, { parser: "babel" })}

  customElements.define('${filePathComponentDomStr}', Element)
            `)
            ])
          }
        }catch(e){
          throw e
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
          let json = require(dir + '/' + name + '.json')
          let hyperscript = compile(replaceWxmlComponentHtml(dir, wxml,json))

          let importStr = json2import(json, dir)
          file.contents = Buffer.concat([
            Buffer.from(
              `${importStr}import appCss from '../../app.wxss'
import pageCss from './${name}.wxss'
import { h, WeElement, rpx } from 'omi'
import { setData, helpInputEvent } from '../../../utils/helper'

  `
            ),
            Buffer.from(
              file.contents
                .toString()
                .replace('Page({', 
`const mpOption = function () {
  return ({`)+`
}`
            ),
            Buffer.from(`
class Element extends WeElement {
  data = mpOption().data

  render = render

  css = css

  beforeRender() {}

  beforeUpdate() {}

  afterUpdate() {}

  helpInputEvent = helpInputEvent;

  install() {
    this.properties = this.props
    this.data = this.data || {};
    Object.assign(this.data, JSON.parse(JSON.stringify(this.props)))
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

${prettier.format(hyperscript, { parser: "babel" })}

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
          Buffer.from(list2require(list))
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

// 打包生成web component 转换统一src 路径
function fileComponentDom(filePth) { 
  let filePathArray = filePth.replace(__dirname, '').replace('.js', '').split(os.type().includes('Windows') ? '\\' : '/');
  filePathArray.shift();  
  
  return 'wx-h5-' + filePathArray.join('-');
}

// 组件转换绝对路径 不再需要依赖强匹配目录文件夹
function replaceComponentOnPath(tag, str, tagName) {
  const reg = new RegExp(`<(${tag})(?=\\s)|<(\\/${tag})>`, 'g');

  return str.replace(reg, function(match, $1, $2) {
      if ($1) {
          return '<' + tagName;
      }
      return '</' + tagName + '>'
  });
}

// 匹配转换html 转换 目录文件夹名字
function replaceWxmlComponentHtml(dir, html, json) {
  if(json.usingComponents){
    Object.keys(json.usingComponents).forEach((key, i) => {
      html = replaceComponentOnPath(
        key,
        html,
        fileComponentDom(path.join(dir, json.usingComponents[key]))
      );
    })
  }


  return html;
}


function json2import(json, dir) {
  let arr = []
  if (json.usingComponents) {
    Object.keys(json.usingComponents).forEach(key => {
      arr.push(`import '${json.usingComponents[key]}'`)
    })
  }
  return arr.join('\r\n') + '\r\n'
//   let arr = []
//   if (json.usingComponents) {

//     Object.keys(json.usingComponents).forEach(key => {
//       let usingArry = path.resolve(dir, json.usingComponents[key]).split('/');
//       usingArry.pop();
//       let wxssPath = '';

//       try{
//         let indexWsxx = [...usingArry, 'index.wxss'].join('/');
//         fs.statSync(indexWsxx);
//         wxssPath = json.usingComponents[key];
//       }catch(e){
          
//       }

//       try{
//         let keyWsxx = [...usingArry, key + '.wxss'].join('/');
//         fs.statSync(keyWsxx);
//         wxssPath = keyWsxx;
//       }catch(e){
          
//       }

//       wxssPath && arr.push(`import '${wxssPath}'`)

//       // let wxml = fs.readFileSync(wxssPath, 'utf8')
//       // console.log(Buffer.from(compileWxss(wxml)))

//       // arr.push(Buffer.from(compileWxss(wxml)))
//       arr.push(`import '${json.usingComponents[key]}'`)
//     })
//   }
//   return arr.join('\r\n') + '\r\n'
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
    .src(isWxComponent ? 'src/mp/pages/**/*.wxss' : 'src/mp/pages/*/*.wxss')
    .pipe(
      tap(file => {
        file.contents = Buffer.from(compileWxss(file.contents.toString()))
        
      })
    )
    .pipe(postcss(plugins))
    .pipe(gulp.dest('src/mp/pages/'))
})

gulp.task('components-wxss', ['copy'], () => {
  return gulp
    .src(isWxComponent ? 'src/mp/components/**/*.wxss' : 'src/mp/components/*/*.wxss')
    .pipe(
      tap(file => {
        file.contents = Buffer.from(compileWxss(file.contents.toString()))

      })
    )
    .pipe(postcss(plugins))
    .pipe(gulp.dest('src/mp/components/'))
})


gulp.task('app-wxss', ['copy'], () => {
  return gulp
    .src('src-mp/app.wxss')
    .pipe(
      tap(file => {
        file.contents = Buffer.from(compileWxss(file.contents.toString()))

      })
    )
    .pipe(postcss(plugins))
    .pipe(gulp.dest('src/mp'))
})

gulp.task('default', ['copy', 'components', 'app-wxss', 'pages-wxss', 'components-wxss', 'pages', 'appjs', 'route', 'watch'])
gulp.task('build', ['copy', 'components', 'app-wxss', 'pages-wxss', 'components-wxss', 'pages', 'appjs', 'route'])
