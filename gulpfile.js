// Requiring Gulp
var gulp = require('gulp'),
    sass = require('gulp-sass'),                 // Requiring gulp-sass (compiles SCSS)
    sourcemaps = require('gulp-sourcemaps'),     // Requiring sourcemaps (helps working locally)
    autoprefixer = require('gulp-autoprefixer'), // Requiring autoprefixer (adds browser prefixes)
    cssnano = require('gulp-cssnano'),           // Requiring cssnano (minifies CSS)
    imagemin = require('gulp-imagemin'),         // Requiring imagemin (lossless image optimization)
    browserSync = require('browser-sync'),       // Requiring browser-sync (browser refresh)
    shell = require('gulp-shell'),               // Requiring gulp-shell (used for KSS node)
    kssNode = 'node ' + __dirname + '/node_modules/kss/bin/kss-node '; // Require kss-node

// Start KSS (style guide) task
gulp.task('kss', shell.task(
  [kssNode + '--config source/kss-config.json']));
  // [kssNode + '--xdemo']));

// Start browserSync server
gulp.task('browserSync', function() {
  browserSync({
    // Display the build folder first
    startPath: 'styleguide',
    server: {
      // Start in root (important for relative paths between build and style guide folders)
      baseDir: ''
    }
  })
})

// Start stylesheets task
gulp.task('stylesheets', function() {
  gulp.src('source/assets/stylesheets/*.scss') // Get all *.scss files
    .pipe(sourcemaps.init()) // Initialize sourcemap plugin
    .pipe(sass().on('error', sass.logError)) // Compiling sass
    .pipe(autoprefixer('last 2 version')) // Adding browser prefixes
    .pipe(sourcemaps.write()) // Writing sourcemaps
    .pipe(cssnano()) // Compress
    .pipe(gulp.dest('build/assets/stylesheets'))
    .pipe(browserSync.reload({
      stream: true
    }));
})

// Start images task
gulp.task('images', function() {

  gulp.src('source/assets/images/**')
    .pipe(imagemin())
    .pipe(gulp.dest('build/assets/images'));

});

// Start watch groups of tasks
gulp.task('default', ['browserSync', 'stylesheets', 'images', 'kss'], function() {
  gulp.watch('source/assets/stylesheets/**/*.scss', ['stylesheets']); // Watch for SCSS changes
  gulp.watch('source/assets/images/**/*', ['images']); // Watch for image changes
  gulp.watch('source/**', ['kss']); // Watch for style guide changes
  gulp.watch('build/**.html', browserSync.reload);
  gulp.watch('styleguide/**.html', browserSync.reload);
});

// Start build task
gulp.task('build', ['stylesheets', 'images', 'kss'], function() {})