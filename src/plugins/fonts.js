export default () => {
  if (process.client) {
    const FontFaceObserver = require("fontfaceobserver")

    const html = document.documentElement

    if (!sessionStorage.fontsLoaded) {
      html.classList.add("fonts-loading")

      const promises = [
        ["Alfa Slab One", { weight: 700 }],
        ["Roboto Mono", { weight: 700 }],
        ["Roboto Mono"]
      ].map(([family, options]) => {
        const observer = new FontFaceObserver(family, options)
        return observer.load()
      })

      Promise.all(promises)
        .then(() => {
          sessionStorage.fontsLoaded = true
          html.classList.remove("fonts-loading")
          html.classList.add("fonts-loaded")
        })
        .catch(() => {
          sessionStorage.fontsLoaded = false
          html.classList.remove("fonts-loading")
          html.classList.add("fonts-failed")
        })
    }
  }
}
