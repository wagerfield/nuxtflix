<template>
  <footer class="global-footer grid mono">
    <nav class="global-footer-nav">
      <ul class="global-footer-nav-list">
        <li
          v-for="link in links"
          :key="link.key"
          class="global-footer-nav-item"
        >
          <nuxt-link
            class="global-footer-nav-link"
            v-text="link.text"
            :to="link.path"
          />
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
        },
        {
          key: "typography",
          path: "/typography",
          text: "Typography"
        },
        {
          key: "palette",
          path: "/palette",
          text: "Palette"
        },
        {
          key: "error",
          path: "/error",
          text: "Error"
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.global-footer {
  background-color: $black;
  min-height: 200px;
}

.global-footer-nav {
  grid-column: content;
}

.global-footer-nav-link {
  padding: 0.5rem 0;
  display: block;
  line-height: 1;
  font-size: 14px;
  color: $white;
}
</style>
