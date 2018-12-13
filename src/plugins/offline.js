export default ({ store }) => {
  if (process.client) {
    const setOffline = () => store.commit("setOffline", !navigator.onLine)
    window.addEventListener("offline", setOffline)
    window.addEventListener("online", setOffline)
  }
}
