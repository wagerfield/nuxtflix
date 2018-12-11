import Vue from "vue"

export default () => {
  let installPrompt = null

  Vue.prototype.$standalone = false

  Vue.prototype.$install = () => {
    console.log("install:", installPrompt)
    if (installPrompt) installPrompt()
  }

  if (process.client) {
    // Before install prompt handler
    window.addEventListener("beforeinstallprompt", (event) => {
      event.preventDefault()
      console.log("beforeinstallprompt", event)
      installPrompt = event.prompt
    })

    // App installed handler
    window.addEventListener("appinstalled", (event) => {
      console.log("appinstalled", event)
    })

    // Standalone flag
    const query = "(display-mode: standalone)"
    const matches = window.matchMedia(query).matches
    Vue.prototype.$standalone = Boolean(matches)
  }

  console.log("standalone:", Vue.prototype.$standalone)
}
