<template>
  <div id="app">
    <Auth />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Auth from './components/Auth.vue';

export default defineComponent({
  name: 'App',
  components: {
    Auth,
  },
});
</script>

<style>
/* Estilos globais */
</style>