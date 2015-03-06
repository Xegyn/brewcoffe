// gulp
var gulp = require('gulp');
var slim = require('gulp-slim');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var batch = require('gulp-batch');

// plugins
var connect = require('gulp-connect');


gulp.task('connect', ['slim', 'sass'], function () {
    connect.server({
        root: 'build/',
        port: 8888
    });
});

gulp.task('slim', function () {
    gulp.src('./app/views/**/*.slim')
        .pipe(slim())
        .pipe(gulp.dest('build'));
});

gulp.task('sass', function () {
    gulp.src('./app/styles/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('build/css'));
});

gulp.task('watch', function () {
    gulp.watch('./app/styles/**/*.scss', ['sass']);
    gulp.watch('./app/views/**/*.slim', ['slim']);
});

gulp.task('default', ['connect', 'watch'], function () {

});