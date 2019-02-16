import { WHITE, BLACK, BLUE } from "./src/core/palette"
import generate from "./nuxt/generate"
import sitemap from "./nuxt/sitemap"
import hooks from "./nuxt/hooks"
import env from "./nuxt/env"

const LANG = "en"
const NAME = "Nuxtflix"
const DESCRIPTION = "Nuxt + Netlify + Contentful = Awesome"
const KEYWORDS = ["nuxt", "netlify", "contentful"]

export default {
  // Server https://nuxtjs.org/api/configuration-server
  server: {
    host: "0.0.0.0",
    port: "5000"
  },
  // Meta https://pwa.nuxtjs.org/modules/meta
  meta: {
    lang: LANG,
    name: NAME,
    description: DESCRIPTION,
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
    theme_color: BLACK, // Browser chrome colour
    background_color: WHITE, // Splash screen background colour
    description: DESCRIPTION
  },
  // Workbox https://pwa.nuxtjs.org/modules/workbox
  workbox: {
    offlineAnalytics: true,
    cachingExtensions: ["sw/caching.js"]
  },
  // Head https://nuxtjs.org/api/configuration-head
  head: {
    htmlAttrs: {
      lang: LANG
    },
    link: [{
      rel: "preconnect",
      href: "https://www.google-analytics.com"
    }, {
      rel: "preconnect",
      href: "https://fonts.googleapis.com"
    }, {
      rel: "preconnect",
      href: "https://fonts.gstatic.com"
    }],
    meta: [{
      hid: "keywords",
      name: "keywords",
      content: KEYWORDS.join(",")
    }]
  },
  // Router https://nuxtjs.org/api/configuration-router
  router: {
    linkActiveClass: "link-active",
    linkExactActiveClass: "link-active-exact"
  },
  // Loading https://nuxtjs.org/api/configuration-loading
  loading: {
    color: BLUE
  },
  // Modules https://nuxtjs.org/guide/modules
  modules: [
    "nuxt-svg-loader",
    "@nuxtjs/style-resources",
    "@nuxtjs/sitemap",
    "@nuxtjs/pwa"
  ],
  // Plugins https://nuxtjs.org/guide/plugins
  plugins: [
    "plugins/webfonts.client",
    "plugins/lazysizes.client",
    "plugins/analytics.client",
    "plugins/components",
    "plugins/cms",
    "plugins/static",
    "plugins/install.client",
    "plugins/outline.client"
  ],
  // Styles https://nuxtjs.org/api/configuration-css
  css: [
    "normalize.css",
    "styles/index.scss"
  ],
  // Style Resources https://github.com/nuxt-community/style-resources-module
  styleResources: {
    scss: [
      "styles/mixins.scss",
      "styles/easing.scss",
      "styles/theme.scss"
    ]
  },
  // Messages https://git.io/fpy8U
  messages: {
    back_to_home: "Home",
    error_404: "Page not found"
  },
  // Build
  srcDir: "src",
  hardSource: true,
  generate,
  sitemap,
  hooks,
  env
}
