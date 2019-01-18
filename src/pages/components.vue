<template>
  <div class="components-page grid">
    <h1 class="uppercase" data-postfix="in the dark.">Components</h1>
    <div class="wrapper light">
      <v-button text="Light Regular" />
      <v-button text="Light Regular Fill" fill />
      <v-button text="Light Elevate" elevate />
      <v-button text="Light Elevate Fill" fill elevate />
    </div>
    <div class="wrapper dark">
      <v-button text="Dark Regular" dark />
      <v-button text="Dark Regular Fill" dark fill />
      <v-button text="Dark Elevate" dark elevate />
      <v-button text="Dark Elevate Fill" dark fill elevate />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.components-page {
  min-height: 100%;
  position: relative;
  background: $stone;
  align-content: flex-start;
  padding-top: $header-height;
}

h1 {
  grid-column: content;
  text-align: center;
  margin: 1.5rem 0 0;
}

.wrapper {
  padding: 2rem 1rem;
  grid-column: bleed;
  display: grid;
  grid-gap: 1rem;
  align-items: end;

  &.dark {
    background: $black;
  }
}

@include between(520px, $desktop-breakpoint) {
  .wrapper {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@include desktop {
  .components-page {
    padding-bottom: 1rem;

    @include before {
      @include fill($left: 50%, $width: 50%);
      background: $black;
    }
  }

  h1 {
    position: relative;
    grid-column: half-1;
    text-align: right;
    margin: 2rem 0;
    &:after {
      content: attr(data-postfix);
      position: absolute;
      margin-left: 2rem;
      text-align: left;
      color: $white;
      width: 100%;
      left: 100%;
      top: 0;
    }
  }

  .wrapper {
    padding: 0;
    &.light {
      grid-column: half-1;
    }
    &.dark {
      grid-column: half-2;
    }
  }
}

@include cinema {
  h1 {
    font-size: 5rem;
    margin: 3rem 0;
  }

  .wrapper {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>
