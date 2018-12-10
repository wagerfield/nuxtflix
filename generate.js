import { FILMS } from "./src/core/constants"

export default {
  fallback: true, // Create 404.html
  subFolders: false, // about/index.html > about.html
  routes() {
    return FILMS.map((film) => ({
      route: `/film/${film}`,
      payload: film
    }))
  }
}
