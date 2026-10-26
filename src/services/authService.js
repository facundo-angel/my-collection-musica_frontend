import api from './api.js';

export async function register(data) {
  const response = await api.post('/auth/register', data);
  return response.data.user;
}

export async function login(email, password) {
  const response = await api.post('/auth/login', { email, password });
  return response.data.user;
}

export async function logout() {
  await api.post('/auth/logout');
}

export async function getMe() {
  const response = await api.get('/auth/me');
  return response.data.user;
}