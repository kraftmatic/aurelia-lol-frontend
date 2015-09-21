// all gulp tasks are located in the ./build/tasks directory
// gulp configuration is in files in ./build directory
require('require-dir')('build/tasks');

gulp.task('serveprod', function() {
  connect.server({
    root: [your_project_path],
    port: process.env.PORT || 5000, // localhost:5000
    livereload: false
  });
});
