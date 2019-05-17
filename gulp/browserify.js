var paths = require('./paths')
var gulp = require('gulp')
var notify = require('./notify')
var source = require('vinyl-source-stream')
var buffer = require('vinyl-buffer')
var browserify = require('browserify')
var sourcemaps = require('gulp-sourcemaps')
var babel = require('babelify')

// JavaScripty Tings
gulp.task('browserify', function () {
  return browserify('./js/src.js')
    .transform('babelify', {presets: ["@babel/preset-env"]})
    .bundle()
    .on('error', notify)
    // Pass desired output filename to vinyl-source-stream
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(paths.scripts.dest))
})
