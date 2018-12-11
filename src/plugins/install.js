import Vue from "vue"

export default (context, inject) => {
  if (process.client) {
    // Install prompt handler
    window.addEventListener("beforeinstallprompt", (event) => {
      event.preventDefault()
      console.log("beforeinstallprompt")
      inject("install", event.prompt)
    })

    // App installed handler
    window.addEventListener("appinstalled", (event) => {
      console.log("appinstalled")
    })

    // Standalone flag
    const query = "(display-mode: standalone)"
    const matches = window.matchMedia(query).matches
    Vue.prototype.$standalone = Boolean(matches)

    console.log("standalone:", Vue.prototype.$standalone)
  }
}
