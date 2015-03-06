// gulp
var gulp = require('gulp');
var slim = require('gulp-slim');
var sass = require('gulp-sass');
var ts = require('gulp-typescript');
var watch = require('gulp-watch');
var batch = require('gulp-batch');

// plugins
var connect = require('gulp-connect');


gulp.task('connect', ['slim', 'sass', 'ts'], function () {
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

gulp.task('ts', function () {
    gulp.src('./app/scripts/**/*.ts')
        .pipe(ts())
        .pipe(gulp.dest('build/js'));
});

gulp.task('watch', function () {
    gulp.watch('./app/styles/**/*.scss', ['sass']);
    gulp.watch('./app/views/**/*.slim', ['slim']);
    gulp.watch('./app/scripts/**/*.ts', ['ts']);
});

gulp.task('default', ['connect', 'watch'], function () {

});