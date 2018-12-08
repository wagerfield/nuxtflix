import { FILMS } from "./src/core/constants"

export default {
  subFolders: false,
  routes() {
    return FILMS.map((film) => ({
      route: `/film/${film}`,
      payload: film
    }))
  }
}
