import { always, either, filter, isNil, unless, where } from "ramda"
import { isArray, isBoolean, isNumber, isObject, isString } from "./utils"

const optionalArray = either(isArray, isNil)

export const isFilm = where({
  // Sys
  id: isString,
  createdAt: isString,
  updatedAt: isString,
  // Fields
  title: isString,
  slug: isString,
  description: isObject,
  releaseDate: isString,
  rating: isNumber,
  cast: optionalArray,
  images: optionalArray,
  cover: isObject,
  trailer: isString,
  watchable: isBoolean
})

export const validateFilm = unless(isFilm, always(null))

export const validateFilms = filter(isFilm)
