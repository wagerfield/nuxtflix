import routes from "./routes"

const lastmodISO = new Date().toISOString()
const mapRoute = ({ route: url }) => ({ url, lastmodISO })
const mapRoutes = (routes) => routes.map(mapRoute)

export default {
  gzip: true,
  generate: true,
  hostname: process.env.BASE_URL,
  routes: () => routes().then(mapRoutes)
}
