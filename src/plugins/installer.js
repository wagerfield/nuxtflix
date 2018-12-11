export default ({ store }, inject) => {
  let installer = null

  inject("install", () => {
    if (installer) installer.prompt()
  })

  if (process.client) {
    // Before install prompt handler
    window.addEventListener("beforeinstallprompt", (event) => {
      event.preventDefault()
      installer = event
      installer.userChoice.then(({ outcome }) => {
        console.log(`User ${outcome} prompt`)
      })
      store.commit("setInstalled", false)
    })

    // App installed handler
    window.addEventListener("appinstalled", (event) => {
      console.log("App installed", event)
    })
  }
}
