import gulp from 'gulp'
import mocha from 'gulp-mocha'
import webpack from 'webpack-stream'
import named from 'vinyl-named'

import webpackConfig from './config/webpack.babel'

gulp.task('default', ['build'])

gulp.task('build', () => {
  return gulp
  .src('src/muscat.js')
  .pipe(named())
  .pipe(webpack(webpackConfig))
  .pipe(gulp.dest('dist/'))
})

gulp.task('test', () => {
  return gulp
  .src('tests/*.js')
  .pipe(mocha())
})
