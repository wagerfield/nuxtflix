<template>
  <div class="films-page grid">
    <h1 class="uppercase title">Films</h1>
    <ul class="films-list">
      <li v-for="film in films" :key="film.id">
        <nuxt-link :to="getPath(film)">
          <v-film-cover :film="film" />
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({ app, payload }) {
    const films = payload || (await app.$cms.getFilms())
    return { films }
  },
  methods: {
    getPath(film) {
      return `/film/${film.slug}`
    }
  }
}
</script>

<style lang="scss" scoped>
.films-page {
  padding-top: $header-height;
  align-content: flex-start;
  background: $black;
  min-height: 100%;
}

.title {
  grid-column: content;
  margin-bottom: 1.4rem;
  text-indent: -2px;
  font-size: 4rem;
  color: $white;
  // &:after {
  //   content: ":";
  // }
}

.films-list {
  margin-top: 1rem;
  grid-column: content;

  display: grid;
  grid-gap: 1rem;
  align-content: flex-start;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
}

@include desktop {
  .title {
    grid-column: gutter;
  }

  .films-list {
    grid-column: gutter;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  }
}
</style>
