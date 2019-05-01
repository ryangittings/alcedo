// Grab our gulp packages
import gulp from 'gulp';
import pkg from './package.json';

const $ = require('gulp-load-plugins')({
  pattern: ['*'],
  scope: ['devDependencies'],
});

// Compile Sass, Autoprefix and minify
gulp.task('styles', function() {
  return gulp.src(pkg.paths.src.scss + pkg.vars.scssName)
    .pipe($.sourcemaps.init()) // Start Sourcemaps
    .pipe($.sass({ outputStyle: 'compressed' }))
    .pipe($.autoprefixer({
      browsers: ['last 5 versions'],
      cascade: false,
    }))
    .pipe(gulp.dest(pkg.paths.dist.css))
    .pipe($.sourcemaps.write('.')) // Creates sourcemaps for minified styles
    .pipe(gulp.dest(pkg.paths.dist.css));
});

gulp.task('default', gulp.series('styles'));