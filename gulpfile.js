var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var header = require('gulp-header');

var headerComment = '/* Nuclear\n' +
                     ' * By AlloyTeam http://www.alloyteam.com/\n'+
                     ' * Github: https://github.com/AlloyTeam/Nuclear\n' +
                     ' * MIT Licensed.\n' +
                     ' */\n';

gulp.task('concat', function () {
    gulp.src([

        'src/intro.js',

        'src/nuclear.js',
        'src/tpl.js',
        'src/observe.js',
        'src/class.js',

        'src/outro.js'

    ])
        .pipe(concat('nuclear.js'))
        .pipe(gulp.dest('dist'))
        .pipe(uglify())
        .pipe(rename('nuclear.min.js'))
        .pipe(header(headerComment))
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['concat']);