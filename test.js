var gulp = require('gulp');

// define plug-ins
var flatten = require('gulp-flatten');
var gulpFilter = require('gulp-filter');
var concat = require('gulp-concat');

// Define paths variables
var dest_path =  'static';

gulp.task('js', function () {
        var jsFilter = gulpFilter('**/*.js');
        gulp.src('./static/**')
        .pipe(jsFilter)
        .pipe(concat('appAll.min.js'))
        .pipe(gulp.dest(dest_path + '/js'));
});
