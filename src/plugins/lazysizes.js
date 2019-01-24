import lazysizes from "lazysizes"

export default ({ query }) => {
  const expand = query.expand
  // eslint-disable-next-line
  console.log("lazysizes > expand:", expand)
  // https://github.com/aFarkas/lazysizes
  Object.assign(lazysizes.cfg, {
    expand // Load nearby elements before they are visible
  })
}
