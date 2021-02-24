/**
 * Sassコンパイル
 */

var gulp = require("gulp");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");

gulp.task("sass", function (done) {
	gulp.src("src/**/*.scss", {base: './scss'})
    .pipe(sass({outputStyle: "expanded"}))
    .pipe(autoprefixer())
    .pipe(gulp.dest("./css"));
    done();
});
