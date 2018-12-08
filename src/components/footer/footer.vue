<template>
  <footer>
    <nav>
      <ul>
        <li v-for="link in links" :key="link.key">
          <nuxt-link :to="link.path" v-text="link.text" />
        </li>
      </ul>
    </nav>
  </footer>
</template>

<script>
export default {
  props: {
    links: {
      type: Array,
      default: () => [
        {
          key: "films",
          path: "/films",
          text: "Films"
        },
        {
          key: "about",
          path: "/about",
          text: "About"
        },
        {
          key: "contact",
          path: "/contact",
          text: "Contact"
        }
      ]
    }
  }
}
</script>
