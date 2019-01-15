<template>
  <div class="components-page grid">
    <h1 class="uppercase" data-postfix="in the dark.">Components</h1>
    <h2 class="uppercase">Buttons</h2>
    <div class="wrapper light">
      <v-button text="Light Regular" />
      <v-button text="Light Elevate" elevate />
      <v-button text="Light Regular Fill" fill />
      <v-button text="Light Elevate Fill" fill elevate />
    </div>
    <div class="wrapper dark">
      <v-button text="Dark Regular" dark />
      <v-button text="Dark Elevate" dark elevate />
      <v-button text="Dark Regular Fill" dark fill />
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

h1,
h2 {
  grid-column: content;
}

h1 {
  margin: 1.5rem 0;
}

h2 {
  margin: 0;
  &:after {
    content: ":";
  }
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

@include above(520px) {
  .wrapper {
    grid-template-columns: repeat(2, 1fr);
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

  h2 {
    margin-bottom: 1rem;
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
    margin: 2rem 0;
  }
}
</style>
