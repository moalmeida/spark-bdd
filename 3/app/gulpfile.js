'use strict';

const gulp = require('gulp');
const eslint = require('gulp-eslint');
const jasmine = require('gulp-jasmine');
const istanbul = require('gulp-istanbul');
const cucumber = require('gulp-cucumber');
const sequence = require('gulp-sequence');

gulp.task('lint', () => {
    return gulp.src(['app/**/*.js', '!node_modules/**'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('istabul-hook', () => {
  return gulp.src(['app/**/*.js', '!app/**/app.js', '!app/**/index.js', '!app/**/*.spec.js'])
    .pipe(istanbul({
      includeUntested: true,
    }))
    .pipe(istanbul.hookRequire())
});

gulp.task('test', ['istabul-hook'], () => {
    return gulp.src(['app/**/*.spec.js'])
         .pipe(jasmine({
           verbose: true,
         }))
         .pipe(istanbul.writeReports())
});

gulp.task('cucumber', () => {
    return gulp.src('app/features/*')
    .pipe(cucumber({
        'steps': 'app/features/**/*.js'
    }));
});

gulp.task('default', sequence(['lint', 'test'], 'cucumber'));
