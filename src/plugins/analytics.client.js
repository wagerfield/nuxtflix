import Vue from "vue"
import VueAnalytics from "vue-analytics"

// Custom Dimensions
const BRANCH = "dimension1"

export default ({ app, env, isDev }) => {
  // https://www.npmjs.com/package/vue-analytics
  Vue.use(VueAnalytics, {
    id: env.GOOGLE_ANALYTICS_ID,
    set: [{ field: BRANCH, value: env.BRANCH }],
    router: app.router,
    debug: {
      // enabled: isDev,
      sendHitTask: !isDev
    }
  })
}
