import { createClient } from "contentful"
import { isFunction } from "../../core/utils"
import { validateFilms, validateFilm } from "../types/film"
import { mapEntry, mapEntries, queryType } from "./entry"

export default (env) => {
  // Client
  const client = createClient({
    host: env.CONTENTFUL_HOST,
    space: env.CONTENTFUL_SPACE_ID,
    environment: env.CONTENTFUL_ENVIRONMENT,
    accessToken: env.CONTENTFUL_ACCESS_TOKEN
  })

  // API
  return {
    async getFilms(options, validate = validateFilms) {
      const query = queryType("film", options)
      const entries = await client.getEntries(query)
      const films = mapEntries(entries.items)
      return isFunction(validate) ? validate(films) : films
    },
    async getFilmBySlug(slug, validate = validateFilm) {
      const query = queryType("film", { "fields.slug": slug })
      const entries = await client.getEntries(query)
      const film = mapEntry(entries.items[0])
      return isFunction(validate) ? validate(film) : film
    }
  }
}
