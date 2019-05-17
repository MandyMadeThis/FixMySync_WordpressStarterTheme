var paths = require('./paths')
var gulp = require('gulp')
var concat = require('gulp-concat')

gulp.task('vendor-scripts', function () {
  return gulp.src(paths.vendor.src)
    .pipe(concat('vendor-scripts.js'))
    .pipe(gulp.dest(paths.vendor.dest))
})
