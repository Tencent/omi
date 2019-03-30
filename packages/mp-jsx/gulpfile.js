let gulp = require('gulp')
let path = require('path')
let tap = require('gulp-tap')
let fs = require('fs')
let jsx2wxml = require('./_scripts/jsx2wxml')

function buildComponent(code) {
  return `
class WeElement {
  render () {
    return ${code}
  }
}`}

const baseOptions = {
  isRoot: false,
  isApp: false,
  sourcePath: __dirname,
  outputPath: __dirname,
  code: '',
  isTyped: false
}

gulp.task('watch', () => {
  gulp.watch(['./**/*.jsx','!./node_modules/**','!./_scripts/**'], () => {
    gulp.start('compile')
  })
})

//加 cache？同样的字符串返回同样的结果
gulp.task('compile', () => {
  return gulp
    .src(['./**/*.jsx','!./node_modules/**','!./_scripts/**'])
    .pipe(
      tap(file => {

        let dir = path.dirname(file.path)
        let arr = dir.split(/\\|\//)
        let name = arr[arr.length - 1]
        console.log('【编译文件】' + file.path)
        let template = jsx2wxml.default({
          ...baseOptions,
          code: buildComponent(file.contents.toString())
        }).template
        console.log('【编译完成】' + file.path)
        file.contents = new Buffer(template)


        fs.writeFileSync(dir + '/' + name + '.wxml', file.contents.toString())
        console.log('【写入文件】' + name + '.wxml')
      })
    )

})

gulp.task('default', ['compile', 'watch'])
console.log('【开始编译】...')
gulp.start('default')
