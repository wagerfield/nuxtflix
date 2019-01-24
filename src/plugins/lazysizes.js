import lazysizes from "lazysizes"

export default ({ query }) => {
  // https://github.com/aFarkas/lazysizes
  Object.assign(lazysizes.cfg, {
    // Load nearby elements before they are visible
    // Defaults to 370 on mobile and 500 on desktop
    // Override to 400 for both mobile and desktop
    expand: parseInt(query.expand, 10) || 400
  })
}
