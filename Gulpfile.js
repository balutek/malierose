var gulp = require('gulp');
var sass = require('gulp-sass');
var compass = require('gulp-compass');
var connect = require('gulp-connect');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('connect', function () {
  connect.server({
    root: 'public',
    port: 4000
  });
});

gulp.task('browserify', function () {
  return browserify('./app/app.js')
    .bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest('./public/js/'));
});

gulp.task("sass", function () {
  return gulp.src('sass/**/*.sass')
    .pipe(compass({
      css: './public/css/',
      sass: './sass'
    }))
    .pipe(gulp.dest('public/css/'));
});

gulp.task('watch', function() {
  gulp.watch('./app/**/*.js', ['browserify']);
  gulp.watch('./sass/**/*.sass', ['sass']);
});

gulp.task('default', ['connect', 'browserify', 'sass', 'watch']);