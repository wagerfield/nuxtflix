import { createClient } from "contentful"
import { mapEntries, queryType } from "./utils"

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
    async getFilms() {
      const entries = await client.getEntries(queryType("film"))
      return mapEntries(entries.items)
    }
  }
}
