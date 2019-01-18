import { prop, propEq } from "ramda"

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
      return films && films.map(prop("slug"))
    },
    filmBySlug({ films }) {
      return (slug) => films && films.find(propEq("slug", slug))
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
