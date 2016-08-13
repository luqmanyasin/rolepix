var gulp = require("gulp");
var cssnano = require("gulp-cssnano");
var uglify = require("gulp-uglify");
var imagemin = require("gulp-imagemin");

gulp.task("build:css", function() {
  return gulp.src([
    "css/styles.css",
    "css/jquery-ui.css",
    "css/animate.css",
    "css/magnific-popup.css"
  ])
  .pipe(cssnano())
  .pipe(gulp.dest("css/min"));
});

gulp.task("build:js", function() {
  return gulp.src([
    "js/app.js",
    "js/appshowcase_3.js",
    "js/javascript.js",
    "js/jquery-ui.js",
    "js/particles-backup.js",
    "js/particles.js",
    "js/smoothscroll.js"
  ])
  .pipe(uglify())
  .pipe(gulp.dest("js/min"));
});

gulp.task("build:img", function() {
  return gulp.src("img/*")
  .pipe(imagemin())
  .pipe(gulp.dest("img/opt"));
});
