import lazysizes from "lazysizes"

export default ({ query }) => {
  const expand = parseInt(query.expand, 10) || 400
  // eslint-disable-next-line
  console.log("lazysizes > expand:", expand)
  // https://github.com/aFarkas/lazysizes
  Object.assign(lazysizes.cfg, {
    // expand // Load nearby elements before they are visible
  })
}
