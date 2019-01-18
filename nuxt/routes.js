import { ap } from "ramda"
import create from "../src/cms/contentful"
import env from "./env"

const filmRoute = (path) => (film) => ({
  route: `${path}/${film.slug}`,
  payload: film
})

const mapFilms = ap([filmRoute("/film"), filmRoute("/watch")])

export default async () => {
  const cms = create(env)
  const films = await cms.getFilms()
  const filmRoutes = mapFilms(films)
  return filmRoutes.concat([
    {
      route: "/films",
      payload: films
    }
  ])
}
