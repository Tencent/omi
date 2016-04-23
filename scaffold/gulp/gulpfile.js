var gulp = require('gulp'),
    fs = require("fs"),
    file = require('gulp-file'),
    runSequence = require('run-sequence');

var componentFileArr=[];

gulp.task('readFile',function(callback) {
    walk("src/component", function (path) {
        var ext = getFileExt(path);
        if (ext === ".html" || ext === ".css") {
            componentFileArr.push(path);
        }
    }, function () {
        var map=arrToObj(componentFileArr);
        console.log(map)
        for(var key in map){
            var paths=map[key];
            var i= 0,len=paths.length;
            var contentArr=[];
            for(;i<len;i++){
                var path=paths[i];

                contentArr.push(fileContentToStr(fs.readFileSync(path, "utf8")));

            }

            file(key+".js", contentArr.join("") , { src: true })
                .pipe(gulp.dest('dist/component'))

        }
        callback();
    })
})

gulp.task('doSomething', function () {
    var fileContent = fs.readFileSync("src/component/todo/index.html", "utf8");
    console.log(componentFileArr)
    return file("ab.js", fileContentToStr(fileContent) , { src: true })
        .pipe(gulp.dest('dist'));
    //return gulp.src(dirs.src + '/templates/*.html')
    //  .pipe(myFunction(fileContent))
    //  .pipe(gulp.dest('destination/path'));
});

//http://www.tuicool.com/articles/rQvUbu2
gulp.task('default',  function (taskDone) {
    runSequence(
        'readFile',
        'doSomething',
        taskDone
    );
});

function arrToObj(arr){
    var obj={};
    console.log(arr.length)
    for(var i= 0,len=arr.length;i<len;i++){
        var item=arr[i];
        var key=item.split("/")[2];
       console.log(obj[key])
        if(!obj[key]){
            obj[key]=[];
        }

        obj[key].push(item);

    }
    return obj;
}

function getFileExt(filename) {
    var index1 = filename.lastIndexOf(".")
    var index2 = filename.length;
    return filename.substring(index1, index2).toLowerCase();
}

function  fileContentToStr(r) {
    var strVar = "tpl";
    var g = "";
    var arr = r.replace(/\r/g,"").split("\n");
    g += "var " + strVar + "=\n";
    var i = 0;
    for (; i < arr.length; i++) {
        var l = '';
        if (i === 0) {
            l += "'"
        }
        ;

        if (i === arr.length - 1) {
            l += arr[i] + "';\n";
        } else {
            l += arr[i] + "\\\n";
        }
        g += l;
    }
    return g;
}

function walk (path, handleFile, callback) {
    var len = 1,       // 文件|目录数，起始一个
        floor = 0;     // 第x个目录？

    function done () {
        // 完成任务, 运行回调函数
        if (--len === 0) {
            callback();
        }
    }

    function composeErr (err) {
        // 错误处理
        console.log('stat error');
        done();  // 以错误内容完成
    }

    function composeDir (path) {
        // 目录处理
        floor++;
        fs.readdir(path, function (err, files) {
            if (err) {
                console.log('read dir error');
                done();  // 目录完成
                return;
            }
            len += files.length;  // 子文件|子目录计数
            files.forEach(function (filename) {
                compose(path + '/' + filename);  // 子内容新的操作
            });
            done();  // 目录完成
        });
    }

    function composeFile (path) {
        // 文件处理
        handleFile(path, floor);
        done();  // 文件完成
    }

    function compose (path) {
        //同步
        fs.stat(path, function (err, stats) {
            if (err) {
                composeErr(err);
                return;
            }

            if (stats.isDirectory()) {
                composeDir(path);
                return;
            }

            composeFile(path);
        });
    }

    compose(path);
}
