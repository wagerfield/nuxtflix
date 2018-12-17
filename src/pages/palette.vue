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
        hex: "#ffffff",
        token: "white"
      },
      {
        hex: "#f3f3f5",
        token: "smoke"
      },
      {
        hex: "#e1e1e6",
        token: "stone"
      },
      {
        hex: "#49494d",
        token: "slate"
      },
      {
        hex: "#303033",
        token: "night"
      },
      {
        hex: "#17171a",
        token: "black"
      },
      {
        hex: "#ff5b4c",
        token: "red"
      },
      {
        hex: "#ffd659",
        token: "yellow"
      },
      {
        hex: "#45e6b0",
        token: "green"
      },
      {
        hex: "#4c92d9",
        token: "blue"
      },
      {
        hex: "#c6e5df",
        token: "sage"
      }
    ]
  })
}
</script>
