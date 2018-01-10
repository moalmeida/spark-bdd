'use strict';

const gulp = require('gulp');
const shell = require('gulp-shell')

gulp.task('cucumber', shell.task(['cucumber.js ./test/features -r ./test/steps']));
