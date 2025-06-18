<template>
  <div class="home-page">
    <h1>Bem-vindo à Home</h1>
    <p>Você está autenticado!</p>
  </div>
</template>

<script lang="ts">
export default {
  setup() {
    // Adicione qualquer lógica necessária para a página Home aqui
  },
};
</script>

<style scoped>
.home-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f9f9f9;
  font-family: Arial, sans-serif;
  text-align: center;
}

h1 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 1rem;
}

p {
  font-size: 1.2rem;
  color: #555;
}
</style>