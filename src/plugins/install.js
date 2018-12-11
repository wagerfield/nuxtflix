import Vue from "vue"

export default () => {
  if (process.client) {
    // Before install prompt handler
    window.addEventListener("beforeinstallprompt", (event) => {
      event.preventDefault()
      console.log("beforeinstallprompt", event)
      Vue.prototype.$install = () => {
        console.log("install", event)
        event.prompt()
      }
    })

    // App installed handler
    window.addEventListener("appinstalled", (event) => {
      console.log("appinstalled", event)
    })

    // Standalone flag
    const query = "(display-mode: standalone)"
    const matches = window.matchMedia(query).matches
    Vue.prototype.$standalone = Boolean(matches)

    console.log("standalone:", Vue.prototype.$standalone)
  } else {
    Vue.prototype.$standalone = false
  }
}
