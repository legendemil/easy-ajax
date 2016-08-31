var gulp = require('gulp'),
	babel = require('gulp-babel'),
	uglify = require('gulp-uglify'),
	pump = require('pump'),
    sourcemaps = require('gulp-sourcemaps'),
    concat = require('gulp-concat');
 

// uglifying js
gulp.task('compress', function (cb) {
  pump([
        gulp.src('src/*.js'),
        babel({
            presets: ['es2015']
        }), 
        uglify(),
        gulp.dest('dist')
    ],
    cb
  );
});
 

// es6 to es5
gulp.task('js-sourcemaps', () => {
    return gulp.src('src/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(concat('main.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
	gulp.watch('src/**/*.js', ['js-sourcemaps']);
});
