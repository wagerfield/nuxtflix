import { shallowMount } from "@vue/test-utils"
import VImage from "./image.vue"

describe("validate", () => {
  test("src", () => {
    const { validate } = VImage.props.src
    expect(validate("/image.jpg")).toBe(true)
    expect(validate("/image.jpg?foo=bar")).toBe(false)
    expect(validate("/image")).toBe(false)
  })

  test("fit", () => {
    const { validate } = VImage.props.fit
    expect(validate("fill")).toBe(true)
    expect(validate("crop")).toBe(true)
    expect(validate("one")).toBe(false)
  })

  test("focus", () => {
    const { validate } = VImage.props.focus
    expect(validate("center")).toBe(true)
    expect(validate("bottom")).toBe(true)
    expect(validate("corner")).toBe(false)
  })

  test("radius", () => {
    const { validate } = VImage.props.radius
    expect(validate(0)).toBe(true)
    expect(validate(1)).toBe(true)
    expect(validate("max")).toBe(true)
    expect(validate("sam")).toBe(false)
  })

  test("quality", () => {
    const { validate } = VImage.props.quality
    expect(validate(0)).toBe(false)
    expect(validate(1)).toBe(true)
    expect(validate(100)).toBe(true)
    expect(validate(101)).toBe(false)
  })

  test("flag", () => {
    const { validate } = VImage.props.flag
    expect(validate("progressive")).toBe(true)
    expect(validate("png8")).toBe(true)
    expect(validate("cat")).toBe(false)
  })
})

describe("render", () => {
  test("required props", () => {
    const wrapper = shallowMount(VImage, {
      propsData: {
        src: "/image.jpg",
        alt: "Foo"
      }
    })
    expect(wrapper.element).toMatchSnapshot()
  })

  test("optional props", () => {
    const wrapper = shallowMount(VImage, {
      propsData: {
        src: "/image.jpg",
        alt: "Foo",
        width: 200,
        focus: "faces",
        flag: "progressive",
        quality: 50
      }
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})
