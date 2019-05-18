var paths = require('./paths');
var gulp = require('gulp');
var browsersync = require('./browsersync');

// Watch all the things
gulp.task('watch', function () {
  gulp.watch(paths.styles.watch, gulp.series(['styles'], reload));
  gulp.watch(paths.scripts.watch, gulp.series(['browserify'], reload));
  gulp.watch(paths.vendor.watch, gulp.series(['vendor-scripts'], reload));
  gulp.watch(paths.php.watch, gulp.series(reload));
})

function reload(done) {
  browsersync.reload()
  done()
}
