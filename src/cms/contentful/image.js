import {
  __,
  both,
  either,
  equals,
  flip,
  gte,
  keys,
  lte,
  includes,
  pickBy,
  pipe,
  prop,
  reduce,
  replace,
  sortBy,
  toPairs
} from "ramda"
import { isNumber } from "./utils"

const OPTION_MAP = {
  background: "bg",
  quality: "q",
  radius: "r",
  height: "h",
  width: "w",
  focus: "f",
  flag: "fl",
  fit: "fit"
}

const OPTION_KEYS = keys(OPTION_MAP)

const oneOf = flip(includes)

const propFrom = flip(prop)

const typeFromFormat = propFrom({
  png: "image/png",
  jpg: "image/jpeg",
  webp: "image/webp"
})

const queryFromOption = propFrom(OPTION_MAP)

const formatQuery = replace(/^&/, "?")

const sortByKey = sortBy(prop(0))

const isOptionKey = oneOf(OPTION_KEYS)

const pickOptions = pickBy((val, key) => isOptionKey(key) && Boolean(val))

const parseOptions = pipe(
  pickOptions,
  toPairs,
  sortByKey,
  reduce((acc, [key, val]) => {
    return `${acc}&${queryFromOption(key)}=${val}`
  }, "")
)

const getFormat = (url) => {
  const match = url.match(/\.([\w]+)$/)
  return match && match[1]
}

export const buildQuery = (options) => {
  return options ? parseOptions(options) : ""
}

export const buildSources = (src, options) => {
  const formats = ["webp", getFormat(src)]
  const query = buildQuery(options)
  return formats.map((format) => ({
    srcset: `${src}?fm=${format}${query}`,
    type: typeFromFormat(format)
  }))
}

export const buildUrl = (src, options) => {
  const query = buildQuery(options)
  return `${src}${formatQuery(query)}`
}

export const props = {
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
