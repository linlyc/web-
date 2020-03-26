
const {src, dest,watch, parallel} = require('gulp');
const uglify = require('gulp-uglify');   //压缩
const concat = require('gulp-concat'); //合并文件
const rename = require('gulp-rename'); //扩展名
const minifyImg = require('gulp-imagemin');  //图片压缩
const sass = require('gulp-sass');   //sass转css
const minifyCss = require('gulp-csso')  //CSS压缩
const connect = require('gulp-connect'); //文件修改刷新

//定义路径
const srcPath = {
	root: 'src',
	html: ['src/**/*.html','!src/include/**/*.html'],
	images: 'src/images/*',
	css: 'src/css/*.scss',
	js: 'src/js/*.js',
	library: 'src/library/*.js'
},
distPath = {
	root: 'dist',
	html: 'dist',
	images: 'dist/images',
	css: 'dist/css',
	js: 'dist/js',
	library: 'dist/library',
	manifest: 'dist/**/*.json'
}

function js() {
	return src(srcPath.js)
			.pipe(concat('src/js/index.js'))
			.pipe(uglify()) 
			.pipe(connect.reload()) 
			.pipe(rename({extname: '.min.js'}))    
			.pipe(dest(distPath.js));
}

function img(){
	return src(srcPath.images)
			.pipe(minifyImg())
			.pipe(dest(distPath.images));
}

function css(){
	return src(srcPath.css)
			.pipe(sass())
			.pipe(connect.reload())
			.pipe(minifyCss())
			.pipe(rename({extname: '.min.css'}))
			.pipe(dest(distPath.css));
}

exports.js = js;
exports.img = img;
exports.css = css;
exports.default = parallel(js,css);

watch(['srcPath.js'],{ignoreInitial: false, queue: false, delay: 500}); 

