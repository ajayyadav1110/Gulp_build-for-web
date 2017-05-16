"use strict";

// require gulp module

var gulp = require('gulp');
var pug = require('gulp-pug');
var sass = require('gulp-sass');
 var rename = require('gulp-rename');
 var concat = require('gulp-concat');
 var uglify = require('gulp-uglify');
 var open = require('gulp-open');
 var connect = require('gulp-connect');
var sourcemaps = require('gulp-sourcemaps');
var cleanCSS = require('gulp-clean-css');
var imagemin = require('gulp-imagemin');
var clean = require('gulp-clean');

gulp.task('pug', function () {
  return gulp.src('src/**/*.pug')
    .pipe(pug({pretty: false}))
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload());
});

//minifiy images, dest dist/content

gulp.task('images', function () {
  return gulp.src('src/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/content'))
    .pipe(connect.reload());
});

//Styles:compile sass into css

gulp.task('styles', function () {
  return gulp.src('src/sass/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(rename('all.min.css'))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('dist/styles'));
});


//minify the scripts
gulp.task('scripts', function () {
  return gulp.src('src/js/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(concat('all.js'))
    .pipe(rename('all.min.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write(''))
    .pipe(gulp.dest('dist/scripts'))
    .pipe(connect.reload());
});

//clean task to clean up the folders before the build runs

gulp.task('clean', ['styles', 'scripts', 'images'], function () {
  return gulp.src('dist', {read: false})
    .pipe(clean());
});


//.....set up the build task to call the other tasks, with clean completing first.

//run the clean, scripts, styles, and images tasks with confidence that the clean task completes before the other commands.

gulp.task('build', ['pug', 'images', 'styles', 'scripts']);


//scripts task should run and the current page should be reloaded in the browser when a change is made to any JavaScript (*.js) file.

gulp.task('watch', ['build'], function () {
  gulp.watch('src/**/*.pug', ['pug']);
  gulp.watch('src/**/*', ['images']);
  gulp.watch('src/**/*.sass', ['styles']);
  gulp.watch('src/**/*.js', ['scripts']);
});

// developer should be able to run the gulp serve command on the command line to build and serve the project using a local web server.




gulp.task('open', ['build'], function(){
  return gulp.src('./')
    .pipe(open({uri: 'http://localhost:8000', browser: 'Google Chrome'}));
});

gulp.task('serve', ['build', 'watch', 'open'], function () {
  connect.server({root: 'dist', port: 8000, livereload: true});
});

// As a developer, when I run the gulp scripts command at the command line, all of my project’s JavaScript files will be linted using ESLint and if there’s an error, the error will output to the console and the build process will be halted.

gulp.task('default', ['build', 'watch', 'serve', 'open']);
