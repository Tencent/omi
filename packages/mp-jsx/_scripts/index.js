let gulp = require('gulp')
let path = require('path')
let tap = require('gulp-tap')
let fs = require('fs')
let jsx2wxml = require('./jsx2wxml')


function buildComponent(code) {
  return `
class WeElement {
  render () {
    return ${code}
  }
}
`
}


const baseOptions = {
  isRoot: false,
  isApp: false,
  sourcePath: __dirname,
  outputPath: __dirname,
  code: '',
  isTyped: false
}


gulp.task('watch', () => {
  gulp.watch('src-mp/**/*', () => {
    gulp.start('copyThen')
  })
})

//加 cache？同样的字符串返回同样的结果
gulp.task('cp', () => {
  return gulp
    .src('../**/*.jsx')
    .pipe(
      tap(file => {

        let dir = path.dirname(file.path)
        let arr = dir.split(/\\|\//)
        let name = arr[arr.length - 1]
        let template = jsx2wxml.default({
          ...baseOptions,
          code: buildComponent(file.contents.toString())
        }).template

        file.contents = new Buffer(template)
        console.log('编译' + file.path)

        fs.writeFileSync(dir + '/' + name + '.wxml', file.contents.toString())
      })
    )

})

gulp.task('default', ['cp'])

gulp.start('default')
