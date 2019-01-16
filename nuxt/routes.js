import create from "../src/cms/contentful"
import env from "./env"

export default async () => {
  const cms = create(env)
  const films = await cms.getFilms()
  return films.map((film) => ({
    route: `/film/${film.fields.slug}`,
    payload: film
  }))
}
