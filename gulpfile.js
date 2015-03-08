// gulp
var gulp = require('gulp');

// plugins
var connect = require('gulp-connect');
var slim = require('gulp-slim');
var sass = require('gulp-sass');
var ts = require('gulp-typescript');
var watch = require('gulp-watch');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var clean = require('gulp-clean');

// tasks
gulp.task('connect', function () {
    connect.server({
        root: 'build/',
        port: 8888
    });
});

gulp.task('clean', function() {
    gulp.src('./build/*')
        .pipe(clean({force: true}));
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
    return browserify()
        .add('./app/scripts/main.ts')
        .plugin('tsify')
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('build/js/'));
});

gulp.task('vendors', function () {
    gulp.src('./app/bower_components/angular/angular*.js')
        .pipe(gulp.dest('build/vendors/angular'));
});

gulp.task('build', ['vendors', 'slim', 'sass', 'ts'], function () {

});

gulp.task('watch', function () {
    gulp.watch('./app/styles/**/*.scss', ['sass']);
    gulp.watch('./app/views/**/*.slim', ['slim']);
    gulp.watch('./app/scripts/**/*.ts', ['ts']);
});

gulp.task('default', ['build', 'connect', 'watch'], function () {

});