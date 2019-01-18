import {
  converge,
  ifElse,
  is,
  map,
  mergeRight,
  pick,
  pipe,
  prop,
  when,
  where
} from "ramda"

export const isArray = Array.isArray || is(Array)

export const isObject = is(Object)

export const isEntry = where({
  fields: isObject,
  sys: isObject
})

export const parseFields = pipe(
  prop("fields"),
  map((entry) => mapEntry(entry))
)

export const parseSys = pipe(
  prop("sys"),
  pick(["id", "createdAt", "updatedAt"])
)

export const transformEntry = converge(mergeRight, [parseFields, parseSys])

export const transformEntries = when(isArray, map((entry) => mapEntry(entry)))

export const mapEntry = ifElse(isEntry, transformEntry, transformEntries)

export const mapEntries = map(mapEntry)

export const queryType = (type) => ({ content_type: type })
