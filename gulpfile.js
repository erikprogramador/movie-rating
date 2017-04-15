const gulp = require('gulp')
const sass = require('gulp-sass')

gulp.task('sass', () => {
  return gulp.src('styles/**/*.{scss,sass}')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('styles'))
})

gulp.task('watch', () => {
  gulp.watch('styles/**/*.{scss,sass}', ['sass'])
})

gulp.task('default', ['sass'])
