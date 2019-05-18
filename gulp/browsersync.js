var gulp        = require('gulp')
var browsersync = require('browser-sync').create()

gulp.task('browsersync', function() {
    browsersync.init({
        proxy:'http://fixmysync.test'
    });
})

module.exports = browsersync
