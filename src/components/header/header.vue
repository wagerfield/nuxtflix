<template>
  <header class="global-header">
    <nuxt-link class="global-header-root-link" to="/">Nuxtflix</nuxt-link>
    <nav class="global-header-nav">
      <ul class="global-header-nav-list">
        <li
          class="global-header-nav-item"
          v-for="link in links"
          :key="link.key"
        >
          <nuxt-link
            class="global-header-nav-link"
            v-text="link.text"
            :to="link.path"
          />
        </li>
      </ul>
    </nav>
  </header>
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
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.global-header {
  background-color: $black;
  display: flex;
  padding: 0.75rem;
  justify-content: space-between;

  .offline & {
    border-top: 4px solid $red;
  }
}

.global-header-nav-list {
  display: flex;
}

.global-header-nav-link,
.global-header-root-link {
  padding: 0.5rem 0.75rem;
  display: block;
  color: $white;

  &:hover {
    box-shadow: 0 0 0 1px $white inset;
  }
}

.global-header-nav-link.link-active,
.global-header-root-link.link-active-exact {
  color: $red;
}
</style>
