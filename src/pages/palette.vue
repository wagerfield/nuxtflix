<template>
  <div>
    <h1>Palette</h1>
    <ul>
      <li v-for="{ hex, token } in colors" :key="hex">
        <div class="swatch" :style="{ background: hex }" v-text="hex" />
        <div class="token" v-text="token" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: () => ({
    colors: [
      {
        hex: "#FFFFFF",
        token: "white"
      },
      {
        hex: "#F3F3F5",
        token: "smoke"
      },
      {
        hex: "#E1E1E6",
        token: "stone"
      },
      {
        hex: "#939399",
        token: "steel"
      },
      {
        hex: "#49494D",
        token: "slate"
      },
      {
        hex: "#303033",
        token: "night"
      },
      {
        hex: "#17171A",
        token: "black"
      },
      {
        hex: "#FF5B4C",
        token: "red"
      },
      {
        hex: "#FFD659",
        token: "yellow"
      },
      {
        hex: "#45E6B0",
        token: "green"
      },
      {
        hex: "#C6E5DF",
        token: "sage"
      },
      {
        hex: "#4C92D9",
        token: "blue"
      }
    ]
  })
}
</script>
