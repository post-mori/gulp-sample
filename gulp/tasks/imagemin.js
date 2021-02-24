/**
 * PNG画像のファイルサイズ削減
 */

var gulp = require('gulp');

var imagemin = require("gulp-imagemin");
var pngquant = require("imagemin-pngquant");
var mozjpeg  = require('imagemin-mozjpeg');

gulp.task("imagemin", function() {
    gulp.src("./src/**/*.{png,jpg}")
    .pipe(imagemin([
       pngquant({
         quality: '65-80',
         speed: 1,
         floyd:0
       }),
       mozjpeg({
         quality:85,
         progressive: true
       }),
       imagemin.svgo(),
       imagemin.optipng(),
       imagemin.gifsicle()
     ]
        ))
        .pipe(gulp.dest("minified_image/"));
});