var gulp        = require('gulp')
var browsersync = require('browser-sync').create()

gulp.task('browsersync', function(done) {
    browsersync.init({
        proxy:'http://fixmysync.test'
    });
    done();
})

module.exports = browsersync
