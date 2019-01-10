import WebFont from "webfontloader"

WebFont.load({
  custom: {
    // https://github.com/typekit/fvd
    // families: ["Noway:n7"]
  },
  google: {
    families: ["Barlow:400", "Barlow Condensed:700", "Roboto Mono:400"]
  }
  // active() {
  //   sessionStorage.fontsLoaded = true
  // },
  // inactive() {
  //   sessionStorage.fontsLoaded = false
  // }
})
