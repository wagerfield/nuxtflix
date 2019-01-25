import { createClient } from "contentful"
import { mapEntry, mapEntries, queryType } from "./entry"
import { validateFilms, validateFilm } from "../types/film"

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
    async getFilms(options, validate = true) {
      const query = queryType("film", options)
      const entries = await client.getEntries(query)
      const films = mapEntries(entries.items)
      return validate ? validateFilms(films) : films
    },
    async getFilmBySlug(slug, validate = true) {
      const query = queryType("film", { "fields.slug": slug })
      const entries = await client.getEntries(query)
      const film = mapEntry(entries.items[0])
      return validate ? validateFilm(film) : film
    }
  }
}
