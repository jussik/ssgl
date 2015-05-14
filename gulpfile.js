var gulp = require('gulp');
var del = require('del');
var tsc = require('gulp-tsc');
var seq = require('run-sequence');
//var exec = require('child_process').exec;
var nodemon = require('gulp-nodemon');

gulp.task('server', function() {
  return gulp.src('src/server.ts')
    .pipe(tsc({
      out: 'server.js',
      sourceMap: true
    }))
    .pipe(gulp.dest('srv'));
});

gulp.task('client', function() {
  return gulp.src('src/client.ts')
    .pipe(tsc({
      out: 'ssgl.js',
      sourceMap: true
    }))
    .pipe(gulp.dest('www/js'));
});

gulp.task('rebuild', function(cb) {
  seq("clean", "default", cb);
});


gulp.task('clean:server', function(cb) {
  del('srv/server.*', cb);
});
gulp.task('clean:client', function(cb) {
  del('www/js/ssgl.*', cb);
});
gulp.task('clean', ['clean:server', 'clean:client']);

gulp.task('run', ['server'], function(cb) {
  nodemon({
    script: 'srv/server.js',
    watch: ['srv/server.js']
  })
});

gulp.task('watch', function() {
  gulp.watch(['src/client.ts', 'src/lib/**/*.ts', 'src/clieny/**/*.ts'], ['client']);
  gulp.watch(['src/server.ts', 'src/lib/**/*.ts', 'src/server/**/*.ts'], ['server']);
});

gulp.task('default', ['watch', 'run']);

