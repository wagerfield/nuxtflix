import {
  converge,
  ifElse,
  map,
  mergeRight,
  pick,
  pipe,
  prop,
  when,
  where
} from "ramda"
import { isArray, isObject } from "../../core/utils"

export const isEntry = where({
  fields: isObject,
  sys: isObject
})

export const parseFields = pipe(
  prop("fields"),
  map((value) => mapEntry(value))
)

export const parseSys = pipe(
  prop("sys"),
  pick(["id", "createdAt", "updatedAt"])
)

export const transformEntry = converge(mergeRight, [parseFields, parseSys])

export const transformEntries = when(isArray, map((value) => mapEntry(value)))

export const mapEntry = ifElse(isEntry, transformEntry, transformEntries)

export const mapEntries = map(mapEntry)

export const queryType = (type, query) =>
  mergeRight(query, { content_type: type })
