var paths = require('./paths');
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var notify = require('gulp-notify');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('styles', function(){
  return gulp.src(paths.styles.src)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', notify.onError({
      title: 'Scss Error', 
      message: "\n<%=error.message%>"
    })))
    .pipe(autoprefixer({ browsers: ['last 3 version', '> 1%', 'IE 10'] }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(paths.styles.dest))
})
