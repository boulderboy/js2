var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');

gulp.task('minify-css', () => {
    return gulp.src('styles/css/*.+(css)')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('src/styles/mincss'));
});

gulp.task('sass', function () {
    return gulp.src('src/styles/sass/*.+(sass)')
        .pipe(sass())
        .pipe(gulp.dest('src/styles/css'));
});

gulp.task('watch', function () {
   gulp.watch('src/styles/sass/*.+(sass)', ['sass']);
});

gulp.task('css', function () {
    return gulp.src('/src/styles/css/*.+(css)')
        .pipe(postcss([autoprefixer()]))
        .pipe(gulp.dest('/src/styles/autoprefixcss'));
});