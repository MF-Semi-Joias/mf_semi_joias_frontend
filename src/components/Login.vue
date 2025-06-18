<template>
  <div class="login-page">
    <h1>Login</h1>
    <form @submit.prevent="handleLogin">
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div>
        <label for="password">Senha:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit">Entrar</button>
    </form>
    <p>
      Não tem uma conta?
      <router-link to="/register">Cadastre-se</router-link>
    </p>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

export default {
  setup() {
    const email = ref("");
    const password = ref("");
    const error = ref("");
    const router = useRouter();

    // Função para tratar o login
    const handleLogin = async () => {
      try {
        // Envia a requisição de login para o back-end
        const response = await axios.post("http://localhost:8080/api/login", {
          email: email.value,
          password: password.value,
        });

        // Se o login for bem-sucedido, recebemos um token do back-end
        const token = response.data.token;

        // Armazena o token no localStorage para autenticação em futuras requisições
        localStorage.setItem("token", token);

        // Redireciona o usuário para a página Home
        router.push("/home");

      } catch (err) {
        // Caso ocorra um erro (ex: credenciais inválidas), exibe uma mensagem
        error.value = "Email ou senha inválidos. Por favor, tente novamente.";
      }
    };

    return {
      email,
      password,
      handleLogin,
      error, // Retorna a mensagem de erro para ser usada no template
    };
  },
};
</script>

<style scoped>
.login-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f9f9f9;
  font-family: Arial, sans-serif;
}

h1 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 1rem;
}

form {
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
}

form div {
  margin-bottom: 1rem;
}

label {
  font-size: 0.9rem;
  color: #555;
  display: block;
  margin-bottom: 0.5rem;
}

input {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

button {
  width: 100%;
  padding: 0.8rem;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #45a049;
}

p {
  margin-top: 1rem;
  font-size: 0.9rem;
  color: #555;
}

router-link {
  color: #007bff;
  text-decoration: none;
}

router-link:hover {
  text-decoration: underline;
}
</style>