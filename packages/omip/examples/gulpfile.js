const gulp = require('gulp')
const path = require('path')
const tap = require('gulp-tap')
const transform = require('@tarojs/transformer-wx')
const fs = require('fs')

gulp.task('copy', () => {
  return gulp.src(['src/**/*',,'!**/*.css']).pipe(gulp.dest('mp'))
})

gulp.task('pages', ['copy'], () => {
  return gulp
    .src('src/pages/*/*.js')
    .pipe(
      tap(file => {
        const res = transform({
          isRoot: false,
          isApp: false,
          sourcePath: __dirname,
          outputPath: __dirname,
          code: file.contents.toString(),
          isTyped: false
        })
        let dir = path.dirname(file.path)
        let arr = dir.split(/\\|\//)
        let name = arr[arr.length-1]
        fs.writeFileSync('mp/pages/'+name+'/'+name+'.wxml', res.template)

        fs.writeFileSync('mp/pages/'+name+'/'+name+'.wxss', fs.readFileSync('src/pages/'+name+'/_'+name+'.css'))
        
        file.contents = Buffer.concat([
           Buffer.from(res.code)])
      }
    ))
    .pipe(gulp.dest('mp/pages/'))
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

// gulp.task('default', ['copy', 'components', 'app-wxss', 'pages-wxss', 'components-wxss', 'pages', 'appjs', 'route', 'watch'])

//import 保留，不进行变换
gulp.task('default', ['copy', 'pages'])