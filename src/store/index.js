export default {
  state: () => ({
    installed: true
  }),
  mutations: {
    setInstalled(state, installed) {
      state.installed = installed
    }
  }
}
