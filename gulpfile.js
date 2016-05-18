var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var header = require('gulp-header');
var watch = require('gulp-watch');
var version = require('./package.json').version;

var headerComment = '/* Nuclear  v'+version+'\n' +
                     ' * By AlloyTeam http://www.alloyteam.com/\n'+
                     ' * Github: https://github.com/AlloyTeam/Nuclear\n' +
                     ' * MIT Licensed.\n' +
                     ' */\n';

gulp.task('build', function () {
    gulp.src([

        'src/intro.js',

        'src/diffDOM.js',
        'src/nuclear.js',
        'src/tpl.js',
        'src/observe.js',
        'src/class.js',
        'src/scoper.js',

        'src/outro.js'

    ])
        .pipe(concat('nuclear.js'))
        .pipe(header(headerComment))
        .pipe(gulp.dest('dist'))
        .pipe(uglify())
        .pipe(rename('nuclear.min.js'))
        .pipe(header(headerComment))
        .pipe(gulp.dest('dist'));
});

// 监视文件的变化
gulp.task('watch', function () {
    gulp.watch('src/*.js', ['build']);
});


gulp.task('default', ['build','watch']);