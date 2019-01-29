import { event as sendEvent } from "vue-analytics"

export default ({ store }) => {
  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault()
    store.commit("setInstaller", event)
  })
  window.addEventListener("appinstalled", (event) => {
    store.commit("setInstaller", null)
    sendEvent("WebApp", "installed")
  })
}
