export default ({ store }) => {
  const setOffline = () => store.commit("setOffline", !navigator.onLine)
  window.addEventListener("offline", setOffline)
  window.addEventListener("online", setOffline)
  setOffline()
}
