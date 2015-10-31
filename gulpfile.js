/// <reference path="typings/gulp/gulp.d.ts"/>
var gulp = require("gulp");
var concat = require("gulp-concat");
var strip = require("gulp-strip-comments");

var files = [
	'./src/Enums.d.ts',
	'./src/Interfaces.d.ts',
	'./src/base/*.d.ts',
	'./src/game/*.d.ts',
	'./src/manager/*.d.ts',
	'./src/scene/*.d.ts',
	'./src/sprite/*.d.ts',
	'./src/spriteset/*.d.ts',
	'./src/window/*.d.ts',
	'./src/Instance_Variables.d.ts'
];


gulp.task('build', function () {
	return gulp.src(files) 
		.pipe(strip())
		.pipe(concat('rmmv.d.ts'))
		.pipe(gulp.dest('./build/'));
});

gulp.task('build-with-pixi', function () {
	files.push('./src/pixi.d.ts');
	return gulp.src(files) 
		.pipe(strip())
		.pipe(concat('rmmv.d.ts'))
		.pipe(gulp.dest('./build/'));
});


gulp.task('default', ['build']);
