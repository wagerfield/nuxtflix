<template>
  <header class="header mono">
    <nuxt-link class="header-logo-link" to="/">
      <v-logo />
      <span class="header-logo-text">Nuxtflix</span>
    </nuxt-link>
    <nav class="header-nav">
      <ul class="header-nav-list">
        <li v-for="link in links" :key="link.key" class="header-nav-item">
          <nuxt-link class="header-nav-link" :to="link.path">
            <span v-text="link.text" />
          </nuxt-link>
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

<style lang="scss" src="./header.scss" />
