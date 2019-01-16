export default {
  state: () => ({
    install: false,
    offline: false,
    outline: false,
    films: null
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
    },
    setFilms(state, films) {
      state.films = films
    }
  },
  getters: {
    filmSlugs({ films }) {
      return films && films.map((film) => film.fields.slug)
    }
  },
  actions: {
    async getFilms({ state, commit }) {
      if (!state.films) {
        commit("setFilms", await this.$cms.getFilms())
      }
    }
  }
}
