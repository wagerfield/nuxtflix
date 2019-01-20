import { buildQuery, props } from "./image"

describe("buildQuery(options)", () => {
  test("without options", () => {
    expect(buildQuery()).toBe("")
  })

  test("with empty options", () => {
    expect(buildQuery({})).toBe("")
  })

  test("with supplied options", () => {
    const result = buildQuery({
      foo: "bar", // Invalid key
      width: 100,
      height: 200,
      fit: "fill"
    })
    // Keys sorted alphabetically
    expect(result).toBe("&fit=fill&h=200&w=100")
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
