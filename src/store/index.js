import { event as sendEvent } from "vue-analytics"
import { prop, propEq } from "ramda"

export default {
  state: () => ({
    installer: null,
    offline: false,
    outline: false,
    films: null
  }),
  mutations: {
    setInstaller(state, installer) {
      state.installer = installer
    },
    setOffline(state, offline) {
      state.offline = offline
    },
    setOutline(state, outline) {
      state.outline = outline
    },
    setFilms(state, films) {
      // console.log("store.setFilms")
      state.films = Object.freeze(films)
    }
  },
  getters: {
    canInstallWebApp({ installer }) {
      return Boolean(installer)
    },
    filmSlugs({ films }) {
      return films && films.map(prop("slug"))
    },
    filmBySlug({ films }) {
      return (slug) => films && films.find(propEq("slug", slug))
    }
  },
  actions: {
    async nuxtServerInit({ dispatch }) {
      // console.log("store.nuxtServerInit")
      // await dispatch("getFilms")
    },
    async installWebApp({ state }) {
      const { installer } = state
      if (installer) {
        installer.prompt()
        sendEvent("WebApp", "install", "User prompted to install")
        const { outcome } = await installer.userChoice
        sendEvent("WebApp", "install", `User ${outcome} prompt`)
      }
    },
    async getFilms({ state, commit }) {
      // console.log("store.getFilms")
      if (!state.films) {
        commit("setFilms", await this.$cms.getFilms())
      }
    }
  }
}
