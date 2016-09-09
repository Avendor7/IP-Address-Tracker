'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCss = require('gulp-clean-css');
var htmlMin = require('gulp-htmlmin');
var bowerSrc = require('gulp-bower-src');
var cleanDest = require('gulp-clean-dest');


gulp.task('sass:dist', function () {
  return gulp.src('./app/**/*.scss')
    .pipe(cleanDest('./dist'))  
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCss())
    .pipe(gulp.dest('./dist'));
});

gulp.task('html:dist', function () {
  return gulp.src('./app/**/*.html')
    .pipe(cleanDest('./dist')) 
    .pipe(htmlMin({collapseWhitespace: true}))
    .pipe(gulp.dest('./dist'));
});

gulp.task('js:dist', function () {
  return gulp.src('./app/**/*.js')
    .pipe(cleanDest('./dist'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('images:dist', function () {
  return gulp.src('./app/**/*.{jpg,png,gif}')
    .pipe(cleanDest('./dist'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('bower:dist', function () {
  bowerSrc()
    .pipe(cleanDest('./dist'))
    .pipe(gulp.dest('./dist/bower_components'));
});

gulp.task('dist', [
  'bower:dist',
  'sass:dist',
  'js:dist',
  'images:dist',
  'html:dist'
]);
