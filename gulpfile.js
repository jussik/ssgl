var gulp = require('gulp');
var del = require('del');
var tsc = require('gulp-tsc');
var seq = require('run-sequence');
var nodemon = require('gulp-nodemon');

gulp.task('server', function() {
  return gulp.src('src/server.ts')
    .pipe(tsc({
      //sourceMap: true
      target: 'ES5'
    }))
    .pipe(gulp.dest('srv'));
});

gulp.task('client', function() {
  return gulp.src('src/ssgl/app.ts')
    .pipe(tsc({
      //sourceMap: true,
      target: 'ES5',
      emitDecoratorMetadata: true
    }))
    .pipe(gulp.dest('www/ssgl'));
});

gulp.task('rebuild', function(cb) {
  seq("clean", "default", cb);
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
    watch: ['srv/server.js']
  })
});

gulp.task('watch', ['client', 'server'], function() {
  gulp.watch(['src/lib/**/*.ts', 'src/ssgl/**/*.ts'], ['client']);
  gulp.watch(['src/server.ts', 'src/lib/**/*.ts', 'src/server/**/*.ts'], ['server']);
});

gulp.task('default', ['watch', 'run']);

