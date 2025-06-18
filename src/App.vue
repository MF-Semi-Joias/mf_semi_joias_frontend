<template>
  <router-view />
</template>

<script lang="ts">
export default {
  setup() {
    
  },
};
</script>

<style>
/* Reset básico para remover margens e paddings padrão */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Estilo global do body */
body {
  font-family: 'Arial', sans-serif;
  background-color: #f9f9f9; /* Cor de fundo padrão */
  color: #333; /* Cor padrão do texto */
  line-height: 1.6; /* Melhor legibilidade */
}

/* Links globais */
a {
  text-decoration: none;
  color: inherit;
}

a:hover {
  text-decoration: underline;
}

/* Estilo global para botões */
button {
  font-family: inherit;
  cursor: pointer;
}

/* Estilo global para inputs */
input {
  font-family: inherit;
}
</style>