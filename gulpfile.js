const gulp        = require('gulp'),
      babel       = require('gulp-babel'),
      scss        = require('gulp-sass'),
      concat      = require('gulp-concat'),
      uglify      = require('gulp-uglify'),
      cssnano     = require('gulp-cssnano'),
      rename      = require('gulp-rename'),
      del         = require('del'),
      fileinclude = require('gulp-file-include'),
      browserSync = require('browser-sync').create()

const src = 'src'
const dist = 'dist'

gulp.task('scss', () => {
  return gulp.src([
      src + '/scss/style.scss',
    ])
    .pipe(scss({outputStyle: 'expanded'}).on('error', scss.logError))
    // .pipe(cssnano()) 
    .pipe(gulp.dest(dist + '/css'))
    .pipe(browserSync.reload({stream: true}))
})

gulp.task('fonts', () => {
  return gulp.src(src + '/fonts/*.*')
    .pipe(gulp.dest(dist + '/fonts'))
    .pipe(browserSync.reload({stream: true}))
})

gulp.task('js', () => {
  return gulp.src([
      'node_modules/jquery/dist/jquery.min.js',
      'node_modules/jquery-form-styler/dist/jquery.formstyler.min.js',
      'node_modules/bootstrap/dist/js/bootstrap.min.js',
      'node_modules/inputmask/dist/jquery.inputmask.js',
      'node_modules/@fancyapps/fancybox/dist/jquery.fancybox.min.js',
      'node_modules/air-datepicker/air-datepicker.js',
      src + '/js/tariffs.js',
      src + '/js/parcel.js',
      src + '/js/index.js',
      src + '/js/modal.js',
    ])
  .pipe(concat('index.js'))
  // .pipe(uglify())
  .pipe(gulp.dest(dist + '/js'))
  .pipe(browserSync.reload({stream: true}))
})

gulp.task('html', () => {
  return gulp.src(src + '/html/*.html')
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest(dist + '/'))
    .pipe(browserSync.reload({stream: true}))
})

gulp.task('img', () => {
  return gulp.src(src + '/img/**/*.*')
    .pipe(gulp.dest(dist + '/img'))
    .pipe(browserSync.reload({stream: true}))
})

gulp.task('images', () => {
  return gulp.src(src + '/images/**/*.*')
    .pipe(gulp.dest(dist + '/images'))
    .pipe(browserSync.reload({stream: true}))
})

gulp.task('clean', () => {
  return del([dist + '/'])
})

gulp.task('browser-sync', () => {
  browserSync.init({
    server: {
      baseDir: dist
    },
    notify: false 
  })
})

gulp.task('watch', () => {
  gulp.watch(src + '/scss/**/*.scss', gulp.parallel('scss'))
  gulp.watch(src + '/fonts/*.*', gulp.parallel('fonts'))
  gulp.watch(src + '/js/**/*.js*', gulp.parallel('js'))
  gulp.watch(src + '/html/**/*.html', gulp.parallel('html'))
  gulp.watch(src + '/img/**/*.*', gulp.parallel('img'))
  gulp.watch(src + '/images/**/*.*', gulp.parallel('images'))
})

gulp.task('default', 
  gulp.series('clean', 
    gulp.parallel('watch', 'scss', 'fonts', 'js', 'html', 'img', 'images', 'browser-sync')
  )
)
