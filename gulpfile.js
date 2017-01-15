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

    const wiredep = require('wiredep').stream;
    const inject = require('gulp-inject');

    let injectSrc = gulp.src(['./public/css/*.css',
                              './public/js/*.js'], {read: false});
    let injectOptions = {
        ignorePath: '/public'
    };

    let options = {
        bowerJson: require('./bower.json'),
        directory: './public/lib',
        ignorePath: '../../public'
    }

    return gulp.src('./src/views/*.html')
        .pipe(wiredep(options))
        .pipe(inject(injectSrc, injectOptions))
        .pipe(gulp.dest('./src/views'));
});