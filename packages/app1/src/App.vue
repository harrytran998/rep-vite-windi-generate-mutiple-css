<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div class="text-center m-auto">
    <a-button size="large" variant="outline"> Hello Windi CSS</a-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { AButton } from '@lalala/atoms.button'

export default defineComponent({
  name: 'App',
  components: {
    AButton,
  },
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
