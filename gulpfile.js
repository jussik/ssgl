var gulp = require('gulp');
var del = require('del');
var tsc = require('gulp-tsc');
var seq = require('run-sequence');
var nodemon = require('gulp-nodemon');

gulp.task('server', ['config'], function() {
  return gulp.src('src/server.ts')
    .pipe(tsc({
      //sourceMap: true,
      target: 'es5',
      emitError: false
    }))
    .pipe(gulp.dest('srv'));
});
gulp.task('client', function() {
  return gulp.src('src/ssgl/app.ts')
    .pipe(tsc({
      //sourceMap: true,
      target: 'es5',
      emitError: false
    }))
    .pipe(gulp.dest('www/ssgl'));
});
gulp.task('config', function() {
  return gulp.src('config.json')
    .pipe(gulp.dest('srv'));
});

gulp.task('rebuild', function(cb) {
  seq("clean", ["client", "server"], cb);
});

gulp.task('clean:server', function(cb) {
  del('srv/', cb);
});
gulp.task('clean:client', function(cb) {
  del('www/ssgl/**/*.js', cb);
});
gulp.task('clean', ['clean:server', 'clean:client']);

gulp.task('run', ['server'], function(cb) {
  nodemon({
    script: 'srv/server.js',
    watch: ['srv/server.js', 'srv/config.json']
  })
});

gulp.task('watch', ['client', 'server'], function() {
  gulp.watch(['src/ssgl/**/*.ts'], ['client']);
  gulp.watch(['src/server.ts', 'src/ssgl/lib/**/*.ts', 'src/api/**/*.ts'], ['server']);
  gulp.watch(['config.json'], ['config']);
});

gulp.task('default', ['watch', 'run']);

