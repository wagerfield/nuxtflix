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

  test("only renders img element with webp disabled", () => {
    const wrapper = shallowMount(Image, {
      propsData: {
        webp: false,
        src: "/image.jpg",
        alt: "Foo"
      }
    })
    expect(wrapper.element).toMatchSnapshot()
  })

  test("renders optional props", () => {
    const wrapper = shallowMount(Image, {
      propsData: {
        src: "/image.jpg",
        alt: "Foo",
        dimensions: [[200], [400, 300]],
        height: 200,
        focus: "faces",
        flag: "progressive",
        quality: 50
      }
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})
