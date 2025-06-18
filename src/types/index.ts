export interface Cliente {
  name: string;
  email: string;
  phone: string;
  cpf: string;
  password: string;
  user: string;
}

export interface Login {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}