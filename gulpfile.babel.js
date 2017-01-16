import gulp from 'gulp';
import jshint from 'gulp-jshint';
import babel from 'gulp-babel';
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

gulp.task('babel',  () => {
    return gulp.src('app.js')
        .pipe(babel())
        .pipe(gulp.dest('dist'));
});

gulp.task('inject', () => {

    const wiredep = require('wiredep').stream;
    const inject = require('gulp-inject');

    const injectSrc = gulp.src(['./public/css/*.css',
                              './public/js/*.js'], {read: false});
    const injectOptions = {
        ignorePath: '/public'
    };

    const options = {
        bowerJson: require('./bower.json'),
        directory: './public/lib',
        ignorePath: '../../public'
    };

    return gulp.src('./src/views/*.jade')
        .pipe(wiredep(options))
        .pipe(inject(injectSrc, injectOptions))
        .pipe(gulp.dest('./src/views'));
});

gulp.task('serve', ['style', 'inject', 'babel'], () => {
    const options = {
        script: './dist/app.js',
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