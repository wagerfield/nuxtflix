import {
  __,
  all,
  both,
  concat,
  curry,
  either,
  equals,
  ifElse,
  join,
  gte,
  lte,
  map,
  mergeRight,
  prop,
  propOr,
  unless,
  when
} from "ramda"
import { isArray, isNumber, isString, oneOf, propFrom } from "~/core/utils"

// Keys sorted alphabetically
export const OPTIONS = [
  ["background", "bg"],
  ["fit", "fit"],
  ["flag", "fl"],
  ["focus", "f"],
  ["format", "fm"],
  ["height", "h"],
  ["quality", "q"],
  ["radius", "r"],
  ["width", "w"]
]

const isArrayAnd = both(isArray)

const typeFromFormat = propFrom({
  png: "image/png",
  jpg: "image/jpeg",
  webp: "image/webp"
})

const delimit = when(isArray, join(", "))

const getDimensions = prop("dimensions")

export const isDimensions = isArrayAnd(all(isNumber))

export const isDimensionsList = isArrayAnd(all(isDimensions))

const meta = curry((postfix, value) => (value ? ` ${value}${postfix}` : ""))

const w = meta("w")

const h = meta("h")

const getFormat = (url) => {
  const match = url.match(/\.([\w]+)$/)
  return match && match[1]
}

const checkSrc = unless(isString, () => {
  throw new Error("src undefined")
})

export const buildQuery = (options) => {
  return OPTIONS.reduce((acc, [key, query]) => {
    const value = options && options[key]
    return value ? `${acc}&${query}=${value}` : acc
  }, "").replace(/^&/, "?")
}

const buildSrc = curry((src, options, dimensions) => {
  const mergeOptions = mergeRight(options)
  const optionsWidth = options && options.width
  const optionsHeight = options && options.height
  const width = propOr(optionsWidth, 0, dimensions)
  const height = propOr(optionsHeight, 1, dimensions)
  const query = buildQuery(mergeOptions({ width, height }))
  return `${src}${query}${w(width)}${h(height)}`
})

export const buildSrcset = (src, options) => {
  const f = buildSrc(checkSrc(src), options)
  const g = ifElse(isDimensionsList, map(f), f)
  return delimit(g(getDimensions(options)))
}

export const buildSources = (src, options) => {
  const formats = ["webp", getFormat(checkSrc(src))]
  const mergeOptions = mergeRight(options)
  return formats.map((format) => ({
    srcset: buildSrcset(src, mergeOptions({ format })),
    type: typeFromFormat(format)
  }))
}

export const buildUrl = (src, options) => {
  return concat(checkSrc(src), buildQuery(options))
}

export const props = {
  // type Width = Number
  // type Height = Number
  // type Dimensions = [Width?, Height?]
  dimensions: {
    type: Array, // Dimensions | Dimensions[]
    validate: either(isDimensions, isDimensionsList)
  },
  width: {
    type: Number
  },
  height: {
    type: Number
  },
  background: {
    type: String
  },
  fit: {
    type: String,
    validate: oneOf(["pad", "fill", "scale", "crop", "thumb"])
  },
  focus: {
    type: String,
    default: null,
    validate: oneOf([
      "center",
      "top",
      "bottom",
      "left",
      "right",
      "top_left",
      "top_right",
      "bottom_left",
      "bottom_right",
      "face",
      "faces"
    ])
  },
  radius: {
    type: [Number, String],
    validate: either(isNumber, equals("max"))
  },
  quality: {
    type: Number,
    validate: both(gte(__, 1), lte(__, 100))
  },
  flag: {
    type: String,
    validate: oneOf(["progressive", "png8"])
  }
}
