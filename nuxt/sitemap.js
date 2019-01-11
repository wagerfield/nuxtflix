import routes from "./routes"

const lastmodISO = new Date().toISOString()
const mapRoute = ({ route: url }) => ({ url, lastmodISO })
const mapRoutes = (routes) => routes.map(mapRoute)

export default {
  routes: () => routes().then(mapRoutes),
  hostname: process.env.DEPLOY_PRIME_URL, // https://www.netlify.com/docs/continuous-deployment/#build-environment-variables
  generate: true,
  gzip: true
}
