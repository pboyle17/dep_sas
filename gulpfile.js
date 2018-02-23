'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var header = require('gulp-header');

var primaryColor = 'green';

//compile
gulp.task('sass', function () {
  return gulp.src('./scss/**/*.scss')
  	.pipe(header('$primary-color: ' + primaryColor + ';\n'))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

//compile watch
gulp.task('sass:watch', function () {
  gulp.watch('./scss/**/*.scss', ['sass']);
});
