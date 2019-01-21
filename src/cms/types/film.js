import { always, filter, unless, where } from "ramda"
import {
  isBoolean,
  isNumber,
  isObject,
  isString,
  optArray
} from "../../core/utils"

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
  cast: optArray,
  images: optArray,
  cover: isObject,
  trailer: isString,
  watchable: isBoolean
})

export const validateFilm = unless(isFilm, always(null))

export const validateFilms = filter(isFilm)
