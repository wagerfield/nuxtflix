export default ({ store }, inject) => {
  let installer = null

  inject("install", () => {
    if (installer) installer.prompt()
  })

  // Before install prompt handler
  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault()
    installer = event
    installer.userChoice.then(({ outcome }) => {
      console.log(`User ${outcome} prompt`)
    })
    store.commit("setInstall", true)
  })

  // App installed handler
  window.addEventListener("appinstalled", (event) => {
    store.commit("setInstall", false)
  })
}