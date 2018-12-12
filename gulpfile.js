const { src, dest, series, parallel } = require("gulp")
const plugins = require("gulp-load-plugins")()

const fonts = {
  styles: "src/styles",
  dest: "src/static/fonts",
  src: [
    "assets/fonts/RobotoMono-Regular.ttf",
    "assets/fonts/RobotoMono-Bold.ttf"
  ]
}

function clean() {
  return src(["dist", "src/static/sw.js", fonts.dest], {
    allowEmpty: true,
    read: false
  }).pipe(plugins.clean())
}

function convertFontsWith(converter) {
  return function convertFonts() {
    return src(fonts.src)
      .pipe(converter())
      .pipe(dest(fonts.dest))
  }
}

const convertWebFonts = parallel(
  convertFontsWith(plugins.ttf2woff),
  convertFontsWith(plugins.ttf2woff2)
)

exports.clean = clean
exports.default = series(clean, convertWebFonts)
