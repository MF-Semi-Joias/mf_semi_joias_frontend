import axios from 'axios';

// Configuração do Axios com a URL base do seu backend
const api = axios.create({
  baseURL: 'http://localhost:8080', // Substitua pelo URL do seu gateway
});

// Adicionar o token JWT automaticamente em todas as requisições
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('jwtToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;