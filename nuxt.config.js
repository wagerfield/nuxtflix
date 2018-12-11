import generate from "./generate"
import hooks from "./hooks"

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
  // Meta https://pwa.nuxtjs.org/modules/meta.html
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
  // Head
  head: {
    htmlAttrs: {
      lang: LANG
    },
    link: [{
      rel: "preconnect",
      href: "https://fonts.googleapis.com/",
      crossorigin: "anonymous"
    }],
    meta: [{
      hid: "keywords",
      name: "keywords",
      content: KEYWORDS.join(",")
    }]
  },
  // Icons
  icon: {
    sizes: [32, 64, 120, 144, 152, 192, 384, 512]
  },
  // Loading Bar
  loading: {
    color: LOADING
  },
  // Modules
  modules: [
    "nuxt-webfontloader",
    "@nuxtjs/pwa"
  ],
  // Plugins
  plugins: [
    "plugins/components",
    "plugins/installer"
  ],
  // Styles
  css: [
    "normalize.css",
    "styles/index.scss"
  ],
  // Web Fonts
  webfontloader: {
    google: {
      families: ["Roboto+Mono:400,700"]
    }
  },
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
