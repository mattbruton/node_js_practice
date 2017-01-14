const gulp = require('gulp');
const jshint = require('gulp-jshint');
const jscs = require('gulp-jscs');

const jsFiles = ['*.js', 'src/**/*.js'];

gulp.task('style', () => {
    return gulp.src(jsFiles)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish', {
            verbose: true
        }))
        .pipe(jscs({configPath: './.jscsrc'}))
        .pipe(jscs.reporter());
});

gulp.task('inject', () => {

    let wiredep = require('wiredep').stream;
    let options = {
        bowerJson: require('./bower.json'),
        directory: './public/lib'
    }

    return gulp.src('./src/views/*.html')
        .pipe(wiredep(options))
        .pipe(gulp.dest('./src/views'));
});