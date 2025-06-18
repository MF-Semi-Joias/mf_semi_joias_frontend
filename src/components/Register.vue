<template>
  <div class="register-page">
    <h1>Cadastro</h1>
    <form @submit.prevent="handleRegister">
      <div>
        <label for="name">Nome:</label>
        <input type="text" id="name" v-model="name" required />
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div>
        <label for="phone">Telefone:</label>
        <input type="text" id="phone" v-model="phone" required />
      </div>
      <div>
        <label for="cpf">CPF:</label>
        <input type="text" id="cpf" v-model="cpf" required />
      </div>
      <div>
        <label for="password">Senha:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <div>
        <label for="user">Usuário:</label>
        <input type="text" id="user" v-model="user" required />
      </div>
      <button type="submit">Cadastrar</button>
    </form>
    <p>
      Já tem uma conta?
      <router-link to="/">Faça login</router-link>
    </p>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios"; // Importa o axios

export default {
  setup() {
    const name = ref("");
    const email = ref("");
    const phone = ref("");
    const cpf = ref("");
    const password = ref("");
    const user = ref("");
    const router = useRouter();

    const handleRegister = async () => {
      try {
        const response = await axios.post("URL_DO_SEU_BACKEND", {
          name: name.value,
          email: email.value,
          phone: phone.value,
          cpf: cpf.value,
          password: password.value,
          user: user.value,
        });
        console.log("Resposta do servidor:", response.data);
        router.push("/"); 
      } catch (error) {
        console.error("Erro ao registrar:", error);
      }
    };

    return {
      name,
      email,
      phone,
      cpf,
      password,
      user,
      handleRegister,
    };
  },
};
</script>

<style scoped>
.register-page {
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
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #0056b3;
}

p {
  margin-top: 1rem;
  font-size: 0.9rem;
  color: #555;
}

router-link {
  color: #4caf50;
  text-decoration: none;
}

router-link:hover {
  text-decoration: underline;
}
</style>