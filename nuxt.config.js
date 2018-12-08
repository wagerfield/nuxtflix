import generate from "./generate"

const LANG = "en"
const NAME = "Nuxtflix"
const THEME = "#2E3033"
const LOADING = "#FA0C44"
const DESCRIPTION = "Nuxt + Netlify + Contentful = Awesome"

export default {
  // Server
  server: {
    host: "0.0.0.0",
    port: 5000
  },
  // Meta https://pwa.nuxtjs.org/modules/meta.html
  meta: {
    lang: LANG,
    name: NAME,
    description: DESCRIPTION,
    theme_color: THEME,
    mobileAppIOS: true,
    ogHost: "https://nuxtflix.com/",
    ogImage: "og.png",
    twitterSite: "@wagerfield",
    twitterCard: "summary"
  },
  // Manifest https://developer.mozilla.org/en-US/docs/Web/Manifest
  manifest: {
    name: NAME,
    short_name: NAME,
    theme_color: THEME,
    background_color: THEME,
    description: DESCRIPTION
  },
  // Head
  head: {
    htmlAttrs: {
      lang: LANG
    },
    link: [{
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css?family=Roboto+Mono:400,700"
    }]
  },
  // Loading Bar
  loading: {
    color: LOADING
  },
  // Modules
  modules: [
    "@nuxtjs/pwa"
  ],
  // Plugins
  plugins: [
    "plugins/components"
  ],
  // Styles
  css: [
    "styles/index.scss"
  ],
  // Messages https://git.io/fpy8U
  messages: {
    back_to_home: "Home",
    error_404: "Page not found",
  },
  // Build
  generate,
  srcDir: "src",
  modern: "client",
  build: {
    splitChunks: {
      pages: false
    }
  }
}
