import routes from "./routes"

const lastmodISO = new Date().toISOString()
const hostname = {
  "branch-deploy": process.env.DEPLOY_PRIME_URL,
  "deploy-preview": process.env.DEPLOY_URL
}

const mapRoute = ({ route: url }) => ({ url, lastmodISO })
const mapRoutes = (routes) => routes.map(mapRoute)

export default {
  // https://www.netlify.com/docs/continuous-deployment/#build-environment-variables
  hostname: hostname[process.env.CONTEXT] || process.env.URL,
  routes: () => routes().then(mapRoutes),
  generate: true,
  gzip: true
}
