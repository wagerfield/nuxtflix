<template>
  <footer class="footer grid mono">
    <div class="footer-logo-wrapper">
      <nuxt-link class="footer-logo-link" to="/">
        <v-logo theme="light-mono" />
        <span class="footer-logo-text">Nuxtflix</span>
      </nuxt-link>
    </div>
    <nav
      v-for="group in groups"
      :key="group.key"
      class="footer-nav"
      :class="group.key"
    >
      <div class="footer-nav-title" v-text="group.title" />
      <ul class="footer-nav-list">
        <li v-for="link in group.links" :key="link.key" class="footer-nav-item">
          <nuxt-link
            v-if="link.path"
            class="footer-nav-link"
            :to="link.path"
            v-text="link.text"
          />
          <a
            v-else-if="link.href"
            class="footer-nav-link"
            :href="link.href"
            v-text="link.text"
          />
        </li>
      </ul>
    </nav>
    <span class="footer-copyright">Copyright 2019</span>
    <span class="footer-signature"
      >Made with love for <a :href="KING">King</a></span
    >
  </footer>
</template>

<script>
import { KING } from "~/core/links"
import links from "./links"

export default {
  static: {
    KING
  },
  props: {
    groups: {
      type: Array,
      default: links
    }
  }
}
</script>

<style lang="scss" src="./footer.scss" />
