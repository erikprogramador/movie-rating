const gulp = require('gulp')
const sass = require('gulp-sass')
const babel = require('gulp-babel')
const browserify = require('gulp-browserify')

gulp.task('sass', () => {
  return gulp.src('styles/**/*.{scss,sass}')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('css'))
})

gulp.task('js', () => {
  return gulp.src('scripts/**/*.js')
    .pipe(browserify({
      insertGlobals : true
    }))
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('js'))
})

gulp.task('watch', () => {
  gulp.watch('styles/**/*.{scss,sass}', ['sass'])
  gulp.watch('scripts/**/*.js', ['js'])
})

gulp.task('default', ['sass', 'js'])
