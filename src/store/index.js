export default {
  state: () => ({
    installed: true,
    offline: false
  }),
  mutations: {
    setInstalled(state, installed) {
      state.installed = installed
    },
    setOffline(state, offline) {
      state.offline = offline
    }
  }
}
