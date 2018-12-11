<template>
  <div>
    <h1>Index</h1>
    <button v-if="!$standalone" @click="$install">Install</button>
  </div>
</template>
