import { FILMS } from "../src/core/constants"

export default () =>
  Promise.resolve(
    FILMS.map((film) => ({
      route: `/film/${film}`,
      payload: film
    }))
  )
