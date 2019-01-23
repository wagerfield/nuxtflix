import { buildQuery, buildSources, buildUrl, props } from "./image"

const src = "/images/cat.jpg"
const err = "src undefined"

describe("buildQuery(options)", () => {
  test("without options", () => {
    expect(buildQuery()).toBe("")
    expect(buildQuery({})).toBe("")
  })

  test("with options", () => {
    const result = buildQuery({
      foo: "bar", // Ignored key
      width: 100,
      height: 200,
      fit: "fill"
    })
    // Keys sorted alphabetically
    expect(result).toBe("&fit=fill&h=200&w=100")
  })
})

describe("buildUrl(src, options)", () => {
  test("without src", () => {
    expect(() => {
      buildUrl()
    }).toThrow(err)
  })

  test("without options", () => {
    expect(buildUrl(src)).toBe(src)
  })

  test("with options", () => {
    expect(
      buildUrl(src, {
        width: 200,
        height: 100,
        fit: "crop"
      })
    ).toBe(`${src}?fit=crop&h=100&w=200`)
  })
})

describe("buildSources(src, options)", () => {
  test("without src", () => {
    expect(() => {
      buildSources()
    }).toThrow(err)
  })

  test("without options", () => {
    expect(buildSources(src)).toEqual([
      {
        srcset: `${src}?fm=webp`,
        type: "image/webp"
      },
      {
        srcset: `${src}?fm=jpg`,
        type: "image/jpeg"
      }
    ])
  })

  test("with options", () => {
    const query = "&fit=crop&h=100&w=200"
    expect(
      buildSources(src, {
        width: 200,
        height: 100,
        fit: "crop"
      })
    ).toEqual([
      {
        srcset: `${src}?fm=webp${query}`,
        type: "image/webp"
      },
      {
        srcset: `${src}?fm=jpg${query}`,
        type: "image/jpeg"
      }
    ])
  })
})

describe("props", () => {
  test("validate fit", () => {
    const { validate } = props.fit
    expect(validate("fill")).toBe(true)
    expect(validate("crop")).toBe(true)
    expect(validate("one")).toBe(false)
  })

  test("validate focus", () => {
    const { validate } = props.focus
    expect(validate("center")).toBe(true)
    expect(validate("bottom")).toBe(true)
    expect(validate("corner")).toBe(false)
  })

  test("validate radius", () => {
    const { validate } = props.radius
    expect(validate(0)).toBe(true)
    expect(validate(1)).toBe(true)
    expect(validate("max")).toBe(true)
    expect(validate("sam")).toBe(false)
  })

  test("validate quality", () => {
    const { validate } = props.quality
    expect(validate(0)).toBe(false)
    expect(validate(1)).toBe(true)
    expect(validate(100)).toBe(true)
    expect(validate(101)).toBe(false)
  })

  test("validate flag", () => {
    const { validate } = props.flag
    expect(validate("progressive")).toBe(true)
    expect(validate("png8")).toBe(true)
    expect(validate("cat")).toBe(false)
  })
})
