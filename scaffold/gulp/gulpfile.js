var gulp = require('gulp'),
    fs = require("fs"),
    file = require('gulp-file');



gulp.task('doSomething', function () {
    var fileContent = fs.readFileSync("src/component/todo/index.html", "utf8");
    console.log(fileContent);

    return file("a.js", fileContent.replace("TODO", " "), { src: true }).pipe(gulp.dest('dist'))
    //return gulp.src(dirs.src + '/templates/*.html')
    //  .pipe(myFunction(fileContent))
    //  .pipe(gulp.dest('destination/path'));
});

gulp.task('default', ['doSomething']);