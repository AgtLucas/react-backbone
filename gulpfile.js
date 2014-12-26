'use strict';

var gulp = require('gulp')
  , browserify = require('browserify')
  ;

// Browserify task
gulp.task('browserify', function () {
  var browserified = transform(function (filename) {
    var b = browserify(filename);
    return b.bundle();
  });

  return gulp.src(['./assets/src/js/*.js'])
    .pipe(browserified)
    .pipe(uglify())
    .pipe(gulp.dest('./assets/build/js'));
});