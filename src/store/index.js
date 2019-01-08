export default {
  state: () => ({
    install: false,
    offline: false,
    outline: false
  }),
  mutations: {
    setInstall(state, install) {
      state.install = install
    },
    setOffline(state, offline) {
      state.offline = offline
    },
    setOutline(state, outline) {
      state.outline = outline
    }
  }
}
