var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var plumber = require('gulp-plumber');

var log = require('../log/log.js');
var notifyError = require('../notify/error.js');

module.exports = function(config, log, error, success) {
    gulp.task('extension', function() {
        return gulp.src(config.extension.src)
            .pipe(plumber({
                errorHandler: error
            }))
            .pipe(gulp.dest(config.extension.dest))
            .pipe(browserSync.stream())
            .pipe(plumber.stop());
    });
};
