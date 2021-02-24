var gulp = require("gulp");

// distフォルダを削除するタスク
var del = require("del");

gulp.task("clean", function () {
  return del("dist");
});

// minified_imageフォルダを削除するタスク
gulp.task("clean-imgmin", function () {
  return del("minified_image");
});

// Sassのコンパイルタスク
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");

gulp.task("sass", function () {
  return gulp.src("src/**/*.scss", {base: './scss'})
    .pipe(sass({outputStyle: "expanded"}))
    .pipe(autoprefixer())
    .pipe(gulp.dest("./css"));
});

// png画像の圧縮タスク
var imagemin = require("gulp-imagemin");
var pngquant = require("imagemin-pngquant");
var mozjpeg  = require('imagemin-mozjpeg');

gulp.task("imagemin", function() {
    return gulp.src("src/**/*.{png,jpg}")
    .pipe(imagemin([
       pngquant({
         quality: [.7,.85],
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

// コピータスク
gulp.task("copy", function () {
  return gulp.src(["src/**/*", "!**/*.scss"])
    .pipe(gulp.dest("dist"));
});

// 削除タスク
gulp.task("clean-dist", function (done) {
  del(["dist/**/*.scss", "dist/**/*.css.map"])
  done();
});


gulp.task('ftp', 
  gulp.series("clean", "clean-imgmin", "sass", "imagemin", "copy", "clean-dist"));

