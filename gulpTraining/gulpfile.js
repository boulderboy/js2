var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var gulpautoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync');
var uglify = require('gulp-uglify');
var pump = require('pump');

gulp.task('compress', function (cb) {
    pump([
            gulp.src('src/js/*.js'),
            uglify(),
            gulp.dest('src/js/minijs')
        ],
        cb
    );
});

gulp.task('browserSync', function () {
   browserSync({
       server: {
           baseDir: 'src'
       }
   })
});

gulp.task('default', () =>
    gulp.src('src/styles/css/*.+(css)')
        .pipe(gulpautoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('src/styles/auteprefixcss'))
);

gulp.task('minify-css', () => {
    return gulp.src('styles/css/*.+(css)')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('src/styles/mincss'));
});

gulp.task('sass', function () {
    return gulp.src('src/styles/sass/*.+(sass)')
        .pipe(sass())
        .pipe(gulp.dest('src/styles/css'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('watch',['browserSync'], function () {
   gulp.watch('src/styles/sass/*.+(sass)', ['sass']);
   gulp.watch('src/index.html', browserSync.reload)
});

gulp.task('css', function () {
    return gulp.src('/src/styles/css/*.+(css)')
        .pipe(postcss([autoprefixer()]))
        .pipe(gulp.dest('/src/styles/autoprefixcss'));
});