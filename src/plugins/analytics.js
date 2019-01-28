import Vue from "vue"
import VueAnalytics from "vue-analytics"

// Custom Dimensions
const BRANCH = "dimension1"

export default ({ app, env, isDev }) => {
  // https://www.npmjs.com/package/vue-analytics
  Vue.use(VueAnalytics, {
    id: env.GOOGLE_ANALYTICS_ID,
    router: app.router,
    autoTracking: {
      exception: true,
      screenview: true
    },
    // debug: {
    //   enabled: isDev,
    //   sendHitTask: !isDev
    // },
    set: [{ field: BRANCH, value: env.BRANCH }]
  })
}
