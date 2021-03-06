const { src, dest, parallel, watch, series } = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const ghPages = require('gulp-gh-pages');

function browser() {
    browserSync.init({
        server: {
            baseDir: "src"
        },
        notify: false,
    })
}

function watchFiles() {
    watch("src/scss/**/*.scss", css);
		watch("src/*.html").on('change', browserSync.reload);
		watch("src/js/*.js").on('change', browserSync.reload);
}

function css() {
    return src("src/scss/**/*.scss")
        .pipe(sass())
        .pipe(dest("src/css"))
        .pipe(browserSync.stream());
}

function deploy() {
	return src("./src/**/*")
			.pipe(ghPages());			
}

exports.css = css;
exports.default = series(
    series(css),
    parallel(browser, watchFiles)
);
exports.deploy = deploy;