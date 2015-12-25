'use strict';

const gulp = require('gulp');
const rimraf = require('rimraf');
const plumber = require('gulp-plumber');
const browserSync = require('browser-sync');
const reload = browserSync.reload;

const sass = require('gulp-sass');

const browserify = require('browserify');
const watchify = require('watchify');
const babelify = require('babelify');
const uglify = require('gulp-uglify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('rmrf', () => {
  rimraf.sync('build');
});

gulp.task('css', () => {
  return gulp.src([
      'static/css/styles.scss',
    ])
    .pipe(plumber())
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(gulp.dest('build'))
    .pipe(reload({
      stream: true
    }));
});

gulp.task('images', () => {
  rimraf.sync('build/images');
  return gulp.src([
      'static/images/**/*.*',
    ])
    .pipe(gulp.dest('build/images'))
    .pipe(reload({
      stream: true
    }));
});

// JS Start
gulp.task('js', bundle);

function bundle() {
  return b
    .bundle()
    .on('error', (e) => {
        console.log(e.toString());
        this.emit('end');
      })
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('build'))
    .pipe(reload({ stream: true })
  );
}

var b = watchify(browserify({
  entries: 'static/js/main.js',
  debug: true,
}));

b.transform(babelify, { presets: ['es2015', 'react'], compact: true });
b.on('update', bundle);
// JS End

gulp.task('default', ['rmrf', 'css', 'images', 'js']);

gulp.task('watch', () => {
  gulp.start('default');

  browserSync({
    server: {
      baseDir: './'
    },
    open: false
  });

  gulp.watch('static/css/**/*.*', ['css']);
  gulp.watch('static/images/**/*.*', ['images']);
  gulp.watch('**/*.html').on('change', reload);
});
