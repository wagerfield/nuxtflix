import { __, both, either, equals, gte, lte, unless } from "ramda"
import { isNumber, isString, oneOf, propFrom } from "~/core/utils"

// Keys sorted alphabetically
export const OPTIONS = [
  ["background", "bg"],
  ["fit", "fit"],
  ["flag", "fl"],
  ["focus", "f"],
  ["height", "h"],
  ["quality", "q"],
  ["radius", "r"],
  ["width", "w"]
]

const typeFromFormat = propFrom({
  png: "image/png",
  jpg: "image/jpeg",
  webp: "image/webp"
})

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
  }, "")
}

export const buildUrl = (src, options) => {
  const base = checkSrc(src)
  const query = buildQuery(options)
  return `${base}${query.replace(/^&/, "?")}`
}

export const buildSources = (src, options) => {
  const base = checkSrc(src)
  const formats = ["webp", getFormat(base)]
  const query = buildQuery(options)
  return formats.map((format) => ({
    srcset: `${src}?fm=${format}${query}`,
    type: typeFromFormat(format)
  }))
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
