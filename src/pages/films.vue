<template>
  <div class="films-page grid">
    <v-hydrate ssr-only>
      <header class="films-header">
        <h1 class="uppercase title">Films</h1>
      </header>
    </v-hydrate>
    <ul class="films-list">
      <v-hydrate v-for="film in films" :key="film.id" on-interaction>
        <li class="film-item">
          <nuxt-link class="films-link" :to="getPath(film)">
            <v-film-cover :film="film" :widths="[240, 400]" />
          </nuxt-link>
        </li>
      </v-hydrate>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({ app, payload }) {
    const select = "sys.id,fields.title,fields.cover,fields.slug"
    const films = payload || (await app.$cms.getFilms({ select }, false))
    return { films }
  },
  methods: {
    getPath(film) {
      return `/watch/${film.slug}`
    }
  }
}
</script>

<style lang="scss" scoped>
.films-page {
  padding-top: $header-height;
  border-bottom: 1px dashed $night;
  align-content: flex-start;
  box-sizing: border-box;
  background: $black;
  min-height: 100%;
}

.films-header {
  grid-column: content;
  margin: 1rem 0;
}

.title {
  margin: -6px 0 -2px;
  text-indent: -1px;
  font-size: 2.5rem;
  color: $white;
  &:after {
    content: ".";
  }
}

.films-list {
  margin: 1rem 0;
  grid-column: content;

  display: grid;
  grid-gap: 1rem;
  align-content: flex-start;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
}

.film-link {
  display: block;
}

@include desktop {
  .films-header {
    margin: 1rem;
  }

  .title {
    margin: -6px 0 -3px;
    text-indent: -2px;
  }

  .films-list {
    margin: 1rem;
    grid-column: bleed;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  }
}

@include above(1280px) {
  .films-list {
    margin: 1rem 2rem 2rem;
    grid-row-gap: 2rem;
  }
}
</style>
