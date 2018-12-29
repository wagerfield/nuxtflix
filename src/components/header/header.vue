<template>
  <header class="global-header mono">
    <nuxt-link class="global-header-nav-link" to="/" exact>
      <span>Nuxtflix</span>
    </nuxt-link>
    <nav class="global-header-nav">
      <ul class="global-header-nav-list">
        <li
          class="global-header-nav-item"
          v-for="link in links"
          :key="link.key"
        >
          <nuxt-link class="global-header-nav-link" :to="link.path">
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

<style lang="scss">
.global-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: $black;
  height: $header-height;
  padding: 0 1rem;

  .offline & {
    border-top: 4px solid $red;
  }
}

.global-header-nav-list {
  display: flex;
}

.global-header-nav-item + .global-header-nav-item {
  margin-left: 0.5rem;
}

.global-header-nav-link {
  padding: 0.5rem;
  display: block;
  line-height: 1;
  font-size: 14px;
  color: $white;

  > span {
    position: relative;
    display: block;

    &:after {
      content: "";
      opacity: 0;
      transform: translate(0, 8px);
      transition: all 0.2s ease-out;
      border-bottom: 1px solid $white;
      position: absolute;
      display: block;
      width: 100%;
      bottom: 0;
      left: 0;
    }
  }

  &:hover,
  &.link-active {
    > span:after {
      transform: translate(0, 4px);
      opacity: 1;
    }
  }
}
</style>
