var gulp = require('gulp');

var header = require('gulp-header');

const fs = require('fs');
//fs.readFileSync('index.html', 'utf8')
gulp.task('html',['copy'],function(){
  return gulp.src('dist/src/source/components/*/*.js')
  //这里面去 gulp-header源码里拿到 path！所以可以读取对应的css 和js 然后拼到头部

  //底部也可以拼上 webcomponent 自定义组件！！
    .pipe(header("aa"))
      .pipe(gulp.dest('dist/src/source/components/'));
});

gulp.task('copy',function(){
  return gulp.src('src/**/*')
      .pipe(gulp.dest('dist/src/source'));
});




gulp.task('default', ['copy','html']);




// gulp.task('webpack',['copy','html'], function() {
//   return gulp.src('dev/pages/index/index.js')
//     .pipe(webpack({
//       output: {
//         filename: '[name].js',
//       }
//     }))
//     .pipe(gulp.dest('dist/'));
// });
