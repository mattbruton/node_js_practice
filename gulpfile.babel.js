import gulp from 'gulp';
import jshint from 'gulp-jshint';
import jscs from 'gulp-jscs';
import nodemon from 'gulp-nodemon';

const jsFiles = [
    '*.js',
    'src/**/*.js'
];

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
    };

    return gulp.src('./src/views/*.html')
        .pipe(wiredep(options))
        .pipe(inject(injectSrc, injectOptions))
        .pipe(gulp.dest('./src/views'));
});

gulp.task('serve', ['style', 'inject'], () => {
    let options = {
        script: 'app.js',
        delayTime: 1,
        env: {
            'PORT': 5000
        },
        watch: jsFiles
    };

    return nodemon(options)
    .on('restart', (ev) => {
        console.log('Restarting...');
    });
});