<template>
  <div>
    <h1>Cadastro de Cliente</h1>
    <form @submit.prevent="register">
      <div>
        <label for="name">Nome:</label>
        <input v-model="formData.name" type="text" id="name" required />
      </div>
      <div>
        <label for="email">Email:</label>
        <input v-model="formData.email" type="email" id="email" required />
      </div>
      <div>
        <label for="password">Senha:</label>
        <input v-model="formData.password" type="password" id="password" required />
      </div>
      <button type="submit">Cadastrar</button>
    </form>

    <h1>Login</h1>
    <form @submit.prevent="login">
      <div>
        <label for="email-login">Email:</label>
        <input v-model="loginData.email" type="email" id="email-login" required />
      </div>
      <div>
        <label for="password-login">Senha:</label>
        <input v-model="loginData.password" type="password" id="password-login" required />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';


export default defineComponent({
  name: 'Auth',
  setup() {
    // Dados do formulário de cadastro
    const formData = reactive({
      name: '',
      email: '',
      password: '',
    });

    // Dados do formulário de login
    const loginData = reactive({
      email: '',
      password: '',
    });

    // Função para cadastrar o cliente
    const register = async () => {
      try {
        const response = await api.post('/cadastro-cliente', formData); // Substitua pelo endpoint correto
        alert('Cadastro realizado com sucesso!');
        console.log(response.data);
      } catch (error: any) {
        console.error('Erro ao cadastrar:', error.response?.data);
        alert('Erro no cadastro: ' + (error.response?.data?.message || 'Erro desconhecido'));
      }
    };

    // Função para realizar o login
    const login = async () => {
      try {
        const response = await api.post('/login', loginData); // Substitua pelo endpoint correto
        const token = response.data.token; // Supondo que o token JWT seja retornado como `data.token`
        alert('Login realizado com sucesso!');
        console.log('Token JWT:', token);

        // Armazene o token no localStorage
        localStorage.setItem('jwtToken', token);
      } catch (error: any) {
        console.error('Erro ao fazer login:', error.response?.data);
        alert('Erro no login: ' + (error.response?.data?.message || 'Erro desconhecido'));
      }
    };

    return {
      formData,
      loginData,
      register,
      login,
    };
  },
});
</script>

<style>
/* Estilos simples */
form {
  margin-bottom: 20px;
}
form div {
  margin-bottom: 10px;
}
label {
  margin-right: 10px;
}
</style>