// gulp
var gulp = require('gulp');
var sass = require('gulp-sass');

// plugins
var connect = require('gulp-connect');


gulp.task('connect', function () {
  connect.server({
    root: 'app/',
    port: 8888
  });
});

gulp.task('sass', function () {
  gulp.src('./app/sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./app/.css'));
});