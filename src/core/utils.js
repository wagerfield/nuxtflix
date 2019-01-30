import { curry, either, equals, flip, includes, isNil, prop } from "ramda"

export const isType = curry((type, value) => equals(type, typeof value))

export const isArray = Array.isArray

export const isBoolean = isType("boolean")

export const isFunction = isType("function")

export const isNumber = isType("number")

export const isObject = isType("object")

export const isString = isType("string")

export const optional = either(isNil)

export const optArray = optional(isArray)

export const optBoolean = optional(isBoolean)

export const optNumber = optional(isNumber)

export const optObject = optional(isObject)

export const optString = optional(isString)

export const oneOf = flip(includes)

export const propFrom = flip(prop)
