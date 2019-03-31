var gulp = require('gulp')
var path = require('path')
var tap = require('gulp-tap')
var fs = require('fs')
var jsx2wxml = require('./_scripts/jsx2wxml')
var watch = require('gulp-watch');

function buildComponent(code) {
  return `
class WeElement {
  render () {
    return ${code.trim()}
  }
}`}

var baseOptions = {
  isRoot: false,
  isApp: false,
  sourcePath: __dirname,
  outputPath: __dirname,
  code: '',
  isTyped: false
}

gulp.task('watch', () => {
  watch(['./**/*.jsx', '!./node_modules/**', '!./_scripts/**'], { events: ['add', 'change'] }, (evt, type) => {
    var contents = fs.readFileSync(evt.path)
    compile({
      path: evt.path,
      contents: contents.toString()
    })
  })
})

//加 cache？同样的字符串返回同样的结果
gulp.task('compile', () => {
  return gulp
    .src(['./**/*.jsx', '!./node_modules/**', '!./_scripts/**'])
    .pipe(
      tap(file => {
        compile({
          path: file.path,
          contents: file.contents.toString()
        })
      })
    )

})

function compile(file) {

  var dir = path.dirname(file.path)
  var arr = dir.split(/\\|\//)
  var name = arr[arr.length - 1]
  console.log('【编译文件】' + file.path)
  var template = jsx2wxml.default({
    ...baseOptions,
    code: buildComponent(file.contents)
  }).template.replace(/<block>/,'').replace(/([\s\S]*)<\/block>/,'$1')
  console.log('【编译完成】' + file.path)



  fs.writeFileSync(dir + '/' + name + '.wxml', template)
  console.log('【写入文件】' + name + '.wxml')
}

gulp.task('default', ['compile', 'watch'])
console.log('【开始编译】...')
gulp.start('default')
