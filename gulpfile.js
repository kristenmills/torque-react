var gulp = require('gulp');

var del = require('del');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var reactify = require('reactify');
var webserver = require('gulp-webserver');
var deploy = require('gulp-gh-pages');

var paths = {
  scripts: './demo/src/js/**/*.@(js|jsx)',
  js_main: './demo/src/js/app.jsx',
  html: './demo/src/**/*.html',
  build_files: './demo/build/**/*',
  build_dir: './demo/build',
  other_scripts: './src/**/*.@(js|jsx)'
};

gulp.task('clean', function(cb) {
  del(['build'], cb);
});

gulp.task('build:scripts', function(){
  var b = browserify({
    extensions: ['.jsx'],
    debug: true
  });
  b.transform(reactify); // use the reactify transform
  b.add(paths.js_main);
  return b.bundle()
    .pipe(source('js/main.js'))
    .pipe(gulp.dest(paths.build_dir));
});

gulp.task('build:html', function(){
  gulp.src(paths.html)
    .pipe(gulp.dest(paths.build_dir));
});

gulp.task('watch', function(){
  gulp.watch(paths.scripts, ['build:scripts']);
  gulp.watch(paths.other_scripts, ['build:scripts']);
  gulp.watch(paths.html, ['build:html']);
});

gulp.task('webserver', function() {
  gulp.src(paths.build_dir)
    .pipe(webserver());
});

gulp.task('ghPages', ['build'], function () {
  return gulp.src(paths.build_files)
    .pipe(deploy());
});

gulp.task('build', ['build:scripts', 'build:html']);
gulp.task('default', ['build', 'webserver', 'watch']);
gulp.task('deploy', ['build', 'ghPages']);
