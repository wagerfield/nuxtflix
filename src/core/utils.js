import { either, flip, includes, is, isNil, prop } from "ramda"

export const isArray = Array.isArray || is(Array)

export const isBoolean = is(Boolean)

export const isNumber = is(Number)

export const isObject = is(Object)

export const isString = is(String)

export const optional = either(isNil)

export const optArray = optional(isArray)

export const optBoolean = optional(isBoolean)

export const optNumber = optional(isNumber)

export const optObject = optional(isObject)

export const optString = optional(isString)

export const oneOf = flip(includes)

export const propFrom = flip(prop)
