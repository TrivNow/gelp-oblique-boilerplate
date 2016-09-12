/**
 * @file gulpfile
 * @author Jim Bulkowski <jim.b@paperelectron.com>
 * @project Trivnow-web-client
 * @license MIT {@link http://opensource.org/licenses/MIT}
 */

'use strict';

var gulp = require('gulp');
var browserify = require('browserify');
var watchify = require('watchify');
var uglify = require('gulp-uglify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var gutil = require('gulp-util');
var jade = require('gulp-jade');
var watch = require('gulp-watch')
var rename = require('gulp-rename')
/**
 *
 * @module gulpfile
 */


var paths = {
  sass: ['./scss/**/*.scss'],
  angular: {
    glob: ['./application_src/**/*.js', './application_src/**/*.jade'],
    base: './application_src',
    entry: './app.js', // Relative to base
    outFile: 'app.js',
    js_output: './application/public/js',
    html_output: './application/public/html',
    templates: './application_src/**/*.jade'
  }
};

gulp.task('build-client', function() {
  buildClientFile(false)
})

gulp.task('watch-client', function() {
  buildClientFile(true)
})

function packageTemplates(fileOrMessage, platform){
  fileOrMessage && gutil.log(gutil.colors.green('Jade: ' + fileOrMessage ));
  gulp.src(paths.angular.templates)
    .pipe(jade({
      pretty: true,
      locals: {platform: platform || 'ios'}
    }))
    .pipe(rename(function(path){
      path.dirname = path.dirname.replace(/templates/, '')
    }))
    .pipe(gulp.dest(paths.angular.html_output))
}

function buildClientFile(watchFiles) {
  var bundler, jadeTemplates;
  bundler = browserify({
    basedir: paths.angular.base,
    extensions: [".js", ".json"],
    cache: {},
    packageCache: {},
    fullPaths: false,
    debug: false
  });

  var runBundle = function() {
    return bundler.bundle()
      .on("error", function(err) {
        gutil.log("Browserify Error", err);
        return this.emit("end");
      })
      .pipe(source(paths.angular.outFile))
      .pipe(buffer())
      .pipe(uglify({
        compress: false,
        mangle: false
      }))
      .pipe(gulp.dest(paths.angular.js_output))
  };

  // This is going to package our Jade into .js files, which will trigger
  // Our browserify incremental build. Killing 2 birds with one code.

  if (watchFiles) {
    bundler = watchify(bundler);
    jadeTemplates = watch(paths.angular.templates)
    jadeTemplates
      .on('change', packageTemplates)
      .on('add', packageTemplates)

    bundler.on("update", runBundle).on("log", gutil.log.bind(gutil, gutil.colors.cyan('Browserify')));
    packageTemplates('Watcher Starting');
  }
  bundler.add(paths.angular.entry);

  // bundler.on("update", runBundle).on("log", gutil.log.bind(gutil, gutil.colors.cyan('Browserify')));
  // packageTemplates('Watcher Starting');
  return runBundle();
};