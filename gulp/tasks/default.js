var gulp = require('gulp');
var runSequence = require('run-sequence').use(gulp);

module.exports = function(config, log, error, success) {
    gulp.task('default', function(callback) {
        runSequence('clean', ['root', 'extension', 'html', 'images', 'scripts', 'styles'], success);
        callback;
    });
};