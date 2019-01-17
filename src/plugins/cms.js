import create from "~/cms/contentful"

export default (context, inject) => {
  inject("cms", create(context.env))
}
