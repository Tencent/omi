var del = require('del'),
    gulp = require('gulp'),
    csso = require('gulp-csso'),
    webpack = require('webpack-stream'),
    runSequence = require('run-sequence'),
    htmlreplace = require('gulp-html-replace'),
    rev = require('gulp-rev'),
    revCollector = require('gulp-rev-collector'),
    header = require('gulp-header'),
    cdnReplace = require('gulp-cdn-replace');

var browserSync = require('browser-sync').create();

var assets = [];
var cdn = '';
var ENV = process.env.npm_lifecycle_event;

gulp.task('clean', function(callback) {
    del.sync([ENV+'/**/**']);
    callback();
});

var webpackConfig = require('./webpack.config.js');
var isDist = ENV ==='dist';

gulp.task('webpack', function() {
    return gulp.src('src/js/index.js')
        .pipe(webpack(webpackConfig, null, function(err, stats) {
            /* Use stats to do more things if needed */
            console.log(stats.toJson().assets);
            assets = stats.toJson().assets;
            //https://www.npmjs.com/package/gulp-html-replace
            //require("fs").writeFileSync("stats.json",JSON.stringify(stats.toJson()));
        })).pipe(gulp.dest(ENV+'/js/'));
});

gulp.task('copyCSS', function() {
    if(isDist){
        return gulp.src('src/**/*.css')
            .pipe(csso()).pipe(rev())
            .pipe(gulp.dest(ENV))
            .pipe(rev.manifest())                                   //- 生成一个rev-manifest.json
            .pipe(gulp.dest('./rev'));
    }else{
        return gulp.src('src/**/*.css')
            .pipe(gulp.dest(ENV))
    }

});

gulp.task('rev', function() {
    return gulp.src(['./rev/*.json', ENV+'/*.html'])   //- 读取 rev-manifest.json 文件以及需要进行css名替换的文件
        .pipe(revCollector())                                   //- 执行文件内css名的替换
        .pipe(gulp.dest(ENV));                     //- 替换后的文件输出的目录
});

gulp.task('copyHTML', function() {
    return gulp.src('src/*.html').pipe(gulp.dest(ENV));
});

gulp.task('copyAsset', function() {
    return gulp.src('src/asset/*.**').pipe(gulp.dest(ENV+'/asset'));
});

gulp.task('copyComponent', function() {
    return gulp.src(['src/component/**','!src/component/**/*.js']).pipe(gulp.dest(ENV+'/component'));
});

gulp.task('fixEvn', function() {
    return gulp.src(['src/component/**','!src/component/**/*.js']).pipe(gulp.dest(ENV+'/component'));
});

//https://segmentfault.com/q/1010000005760064/a-1020000005760268
gulp.task('replace', function() {
    var vdName = assets[assets.length-1].name;
    var omiName = '';
    assets.forEach(function(item){
        if(item.chunkNames[0]==='omi'){
            omiName = item.name;
        }
    });
    assets.forEach(function(item){
        gulp.src(ENV+'/'+item.chunkNames[0]+ '.html')
            .pipe(htmlreplace({
                'omijs':(isDist?(cdn+ 'js/'+ omiName):''),
                'vjs': (isDist?(cdn+ 'js/'+ vdName):('js/'+ vdName)),
                'js': (isDist?(cdn+ 'js/'+ item.name):('js/'+ item.name))
            }))
            .pipe(gulp.dest(ENV));

        if(item.chunkNames[0]!=='omi'&&item.chunkNames[0]!=='vendor') {
            gulp.src(ENV + '/js/' + item.name)
                .pipe(header('window.Root ={}; Root.isDev = ' + (isDist ? 'false' : 'true') + ';'))
                .pipe(gulp.dest(ENV + '/js'))
        }
    });
});


gulp.task('cdnReplace', function() {
    return gulp.src('./dist/*.html')
        .pipe(cdnReplace({
            dir: './dist',
            root: {
                css: cdn
            }
        }))
        .pipe(gulp.dest('./dist'));
});

gulp.task('browser-sync',function(){
    browserSync.init({
        server:{
            baseDir:'./'+ENV+'/'
        }
    });

    if(!isDist) {
        gulp.watch(ENV + '/**').on('change', browserSync.reload);
        gulp.watch(['src/component/**/*.js', 'src/js/*.js', 'common/*.js'], function () {
            runSequence(
                'webpack',
                'replace');
        });

        gulp.watch(['src/css/**'], function () {
            runSequence(
                'copyCSS');
        });
    }

});


if(isDist){
    gulp.task('default', function(done) {
        runSequence(
            'clean',
            'webpack',
            'copyCSS',
            'copyAsset',
            'copyHTML',
            'copyComponent',
            'rev',
            'cdnReplace',
            'replace',
            'browser-sync',
            done);
    });
}else{
    gulp.task('default', function(done) {
        runSequence(
            'clean',
            'webpack',
            'copyCSS',
            'copyAsset',
            'copyHTML',
            'copyComponent',
            'replace',
            'browser-sync',
            done);
    });
}
