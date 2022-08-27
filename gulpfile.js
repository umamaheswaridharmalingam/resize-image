var gulp = require('gulp');
var del = require('del');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var header = require('gulp-header');
var footer = require('gulp-footer');

var paths = {
	scripts: ['src/hermite.js']
};

//prepare comments
var pkg = require('./package.json');
var banner = ['/**',
  ' * <%= pkg.name %> - <%= pkg.description %>',
  ' * @version v<%= pkg.version %>',
  ' * @link <%= pkg.homepage %>',
  ' * @license <%= pkg.license %>',
  ' */',
  ''].join('\n');

//clear dist dir
gulp.task('clean', function () {
	return del(['dist']);
});

// Minify scripts
gulp.task('scripts-browser', function () {
	return gulp.src(paths.scripts)
		.pipe(uglify())
		.pipe(concat('hermite.js'))
		.pipe(header(banner, { pkg : pkg } ))
		.pipe(footer("\n"))
		.pipe(gulp.dest('dist'));
});

// Minify scripts for NPM
gulp.task('scripts-npm', function () {
	return gulp.src(paths.scripts)
		.pipe(uglify())
		.pipe(concat('hermite.npm.js'))
		.pipe(header(banner, { pkg : pkg } ))
		.pipe(footer("\nmodule.exports = ResizeImage_class;\n"))
		.pipe(gulp.dest('dist'));
});

//list all jobs
gulp.task(
	'default',
	gulp.series('clean', gulp.parallel('scripts-browser', 'scripts-npm'))
);
