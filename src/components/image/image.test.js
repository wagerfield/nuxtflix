import { shallowMount } from "@vue/test-utils"
import Image from "./image.vue"

describe("Image", () => {
  test("renders required props", () => {
    const wrapper = shallowMount(Image, {
      propsData: {
        src: "/image.jpg",
        alt: "Foo"
      }
    })
    expect(wrapper.element).toMatchSnapshot()
  })

  test("renders sources with webp flag", () => {
    const wrapper = shallowMount(Image, {
      propsData: {
        src: "/image.jpg",
        alt: "Foo",
        webp: true
      }
    })
    expect(wrapper.element).toMatchSnapshot()
  })

  test("renders optional props", () => {
    const wrapper = shallowMount(Image, {
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
