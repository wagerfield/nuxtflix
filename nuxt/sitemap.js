import routes from "./routes"

const lastmodISO = new Date().toISOString()
const mapRoute = ({ route: url }) => ({ url, lastmodISO })
const mapRoutes = (routes) => routes.map(mapRoute)

export default {
  gzip: true,
  generate: true,
  hostname: "https://nuxtflix.com",
  routes: () => routes().then(mapRoutes)
}
