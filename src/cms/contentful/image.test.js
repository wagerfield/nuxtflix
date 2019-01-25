import {
  buildQuery,
  buildSources,
  buildSrcset,
  buildUrl,
  isDimensions,
  isDimensionsList,
  props
} from "./image"

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
      format: "webp",
      fit: "crop"
    })
    // Keys sorted alphabetically
    expect(result).toBe("?fit=crop&fm=webp&h=200&w=100")
  })
})

describe("buildSrcset(src, options)", () => {
  test("without src", () => {
    expect(() => {
      buildSrcset()
    }).toThrow(err)
  })

  test("without options", () => {
    expect(buildSrcset(src)).toBe(src)
  })

  test("with options", () => {
    expect(
      buildSrcset(src, {
        width: 200,
        height: 100,
        format: "webp",
        fit: "crop"
      })
    ).toBe(`${src}?fit=crop&fm=webp&h=100&w=200 200w`)
  })

  test("with dimensions", () => {
    const result = buildSrcset(src, {
      dimensions: [300],
      width: 200,
      height: 100,
      format: "webp",
      fit: "crop"
    })
    const expected = `${src}?fit=crop&fm=webp&h=100&w=300 300w`
    expect(result).toBe(expected)
  })

  test("with dimensions list", () => {
    const result = buildSrcset(src, {
      dimensions: [[300, 200], [400]],
      width: 200,
      height: 100,
      format: "webp",
      fit: "crop"
    })
    const expected = [
      `${src}?fit=crop&fm=webp&h=200&w=300 300w`,
      `${src}?fit=crop&fm=webp&h=100&w=400 400w`
    ].join(", ")
    expect(result).toBe(expected)
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
    expect(
      buildSources(src, {
        width: 200,
        height: 100,
        fit: "crop"
      })
    ).toEqual([
      {
        srcset: `${src}?fit=crop&fm=webp&h=100&w=200 200w`,
        type: "image/webp"
      },
      {
        srcset: `${src}?fit=crop&fm=jpg&h=100&w=200 200w`,
        type: "image/jpeg"
      }
    ])
  })
})

describe("isDimensions(value)", () => {
  test("fail: number", () => {
    expect(isDimensions(100)).toBe(false)
  })

  test("fail: string", () => {
    expect(isDimensions("100")).toBe(false)
  })

  test("fail: any[]", () => {
    expect(isDimensions([100, "200"])).toBe(false)
  })

  test("pass: number[]", () => {
    expect(isDimensions([100])).toBe(true)
    expect(isDimensions([100, 200])).toBe(true)
  })

  test("pass: empty array", () => {
    expect(isDimensions([])).toBe(true)
  })
})

describe("isDimensionsList(value)", () => {
  test("fail: number", () => {
    expect(isDimensionsList(100)).toBe(false)
  })

  test("fail: string", () => {
    expect(isDimensionsList("100")).toBe(false)
  })

  test("fail: any[]", () => {
    expect(isDimensionsList([100, "200"])).toBe(false)
  })

  test("pass: Dimensions[]", () => {
    expect(isDimensionsList([[100]])).toBe(true)
    expect(isDimensionsList([[100, 200], [300]])).toBe(true)
  })

  test("pass: empty nested array", () => {
    expect(isDimensionsList([[]])).toBe(true)
  })
})

describe("props", () => {
  test("validate dimensions", () => {
    const { validate } = props.dimensions
    // Pass
    expect(validate([100, 200])).toBe(true)
    expect(validate([[100, 200], [400]])).toBe(true)
    // Fail
    expect(validate(100)).toBe(false)
    expect(validate(["100"])).toBe(false)
    expect(validate([100, "200"])).toBe(false)
  })

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
