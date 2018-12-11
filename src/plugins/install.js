import Vue from "vue"

export default (context, inject) => {
  if (process.client) {
    window.addEventListener("beforeinstallprompt", (event) => {
      event.preventDefault()
      console.log("beforeinstallprompt")
      inject("install", event.prompt)
    })
  }
}
