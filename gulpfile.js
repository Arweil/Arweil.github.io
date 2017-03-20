var gulp = require('gulp');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('buildless', function () {
  gulp.src('less/*.less')
    .pipe(less())
    .pipe(autoprefixer({
      browsers: ['> 1%', 'last 12 versions', 'Firefox 20'],
      cascade: true,
    }))
    .pipe(gulp.dest('css'));
})

gulp.task('allcss', function () {
  
})

gulp.task('alljs', function () {

})

gulp.task('all', ['alljs', 'allcss']);

gulp.task('watch', function () {
  gulp.watch('less/*.less', ['buildless']);
});
