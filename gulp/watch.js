var paths = require('./paths');
var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var watchify = require('watchify');
var babel = require('babelify');
var browsersync = require('./browsersync');

// Watch all the things
gulp.task('watch', function () {
  gulp.watch(paths.styles.watch, gulp.series('reload-on-css'));
  gulp.watch(paths.scripts.watch, gulp.series('reload-on-js'));
  gulp.watch(paths.vendor.watch, gulp.series('reload-on-js'));
  gulp.watch(paths.php.watch, gulp.series('reload-on-php'));

  var watcher = watchify(browserify({
    // Specify the entry point of your app
    entries: [paths.scripts.src],
    debug: true,
    cache: {},
    packageCache: {},
    fullPaths: true
  }).transform(babel))

  return watcher.on('update', function () {
    watcher.bundle()
      .pipe(source(paths.scripts.src))
      .pipe(gulp.dest(paths.scripts.dest))
  })
})

gulp.task('reload-on-css', gulp.series(['styles'], reload))
gulp.task('reload-on-js', gulp.series(['browserify'], reload))
gulp.task('reload-on-php', gulp.series(reload))

function reload (done) {
  browsersync.reload()
  done()
}
