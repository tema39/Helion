const gulp = require('gulp');
const sass = require('gulp-sass');
const pug = require('gulp-pug');
const browserSync = require('browser-sync').create();


function style() {
    return gulp.src('./scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./build/css'))
    .pipe(browserSync.stream())
}

function template() {
    return gulp.src('./pug/pages/**/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('./build'))
    .pipe(browserSync.stream())
}

function watch() {
    browserSync.init({
        server: {
            baseDir: './build'
        }
    });

    gulp.watch('./scss/**/*.scss', style);
    gulp.watch('./pug/**/*.pug', template);
    gulp.watch('./build/*.html').on('change', browserSync.reload);
    gulp.watch('./*.js').on('change', browserSync.reload);
} 

exports.style = style;
exports.watch = watch;
exports.pug = template;