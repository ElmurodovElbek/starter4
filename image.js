// const {src,dest,} = require("gulp");
const url = require("../config/url.js"); 
// const gulpSize = require("gulp-size");
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const imageMin = require("gulp-imagemin");


const image = () => {
    return src(url.image.src)
    .pipe(plumber({
        errorHandler: notify.onError(error => ({
            title: "image",
            message: error.message
        }))
    }))
    .pipe(imageMin({
        verbose: true
    }))
    .pipe(dest(url.image.dist))
}



module.exports = image;