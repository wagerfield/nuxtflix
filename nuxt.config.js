import generate from "./nuxt.generate"
import hooks from "./nuxt.hooks"

const LANG = "en"
const NAME = "Nuxtflix"
const THEME = "#302e33"
const LOADING = "#fa0c54"
const DESCRIPTION = "Nuxt + Netlify + Contentful = Awesome"
const KEYWORDS = ["nuxt", "netlify", "contentful"]

export default {
  // Server
  server: {
    host: "0.0.0.0",
    port: 5000
  },
  // Meta https://pwa.nuxtjs.org/modules/meta
  meta: {
    lang: LANG,
    name: NAME,
    description: DESCRIPTION,
    theme_color: THEME, // Browser chrome colour
    mobileAppIOS: true,
    ogHost: "https://nuxtflix.com/",
    ogImage: "og.png",
    twitterSite: "@wagerfield",
    twitterCard: "summary"
  },
  // Manifest https://developer.mozilla.org/docs/web/manifest
  manifest: {
    name: NAME,
    short_name: NAME,
    theme_color: THEME, // Browser chrome colour
    background_color: THEME, // Splash screen background colour
    description: DESCRIPTION
  },
  // Workbox https://pwa.nuxtjs.org/modules/workbox
  workbox: {
    cachingExtensions: "sw/caching.js",
    routingExtensions: "sw/routing.js"
  },
  // Head
  head: {
    htmlAttrs: {
      lang: LANG
    },
    link: [{
      once: true,
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css?family=Roboto+Mono:400,700"
    }],
    meta: [{
      hid: "keywords",
      name: "keywords",
      content: KEYWORDS.join(",")
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
    "plugins/fonts",
    "plugins/components",
    "plugins/installer"
  ],
  // Styles
  css: [
    "normalize.css",
    "styles/index.scss"
  ],
  // Messages https://git.io/fpy8U
  messages: {
    back_to_home: "Home",
    error_404: "Page not found",
  },
  // Build
  hooks,
  generate,
  srcDir: "src"
}
