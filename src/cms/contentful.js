import { createClient } from "contentful"

const mapEntry = (entry) => entry
const mapEntries = (entries) => entries.map(mapEntry)

export default (env) => {
  const client = createClient({
    host: env.CONTENTFUL_HOST,
    space: env.CONTENTFUL_SPACE_ID,
    environment: env.CONTENTFUL_ENVIRONMENT,
    accessToken: env.CONTENTFUL_ACCESS_TOKEN
  })
  return {
    async getFilms() {
      const entries = await client.getEntries({
        content_type: "film"
      })
      return mapEntries(entries.items)
    }
  }
}
