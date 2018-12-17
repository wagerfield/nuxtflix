export default {
  state: () => ({
    install: false,
    offline: false
  }),
  mutations: {
    setInstall(state, install) {
      state.install = install
    },
    setOffline(state, offline) {
      state.offline = offline
    }
  }
}
