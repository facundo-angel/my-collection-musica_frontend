/*baseURL: '/api' hace que todas las llamadas vayan a nuestro backend. En tu compu pasan por el proxy de Vite y en producción por Vercel.
withCredentials manda la cookie con el JWT en cada pedido. El token nunca se guarda en localStorage, que es lo que recomienda la consigna.
El interceptor revisa todas las respuestas en un solo lugar. Si una ruta privada devuelve 401, significa que el token venció, y se avisa a la app para cerrar la sesión. Así se cumple “manejo de token vencido”. */

import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
  withCredentials: true,
});

let onSessionExpired = null;

export function setSessionExpiredHandler(handler) {
  onSessionExpired = handler;
}

// Si el backend responde 401 en una ruta privada, el token venció
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;
    const url = error.config?.url ?? '';

    if (status === 401 && !url.startsWith('/auth/') && onSessionExpired) {
      onSessionExpired();
    }

    return Promise.reject(error);
  }
);

export function getErrorMessage(error) {
  if (!error.response) {
    return 'No pudimos conectar con el servidor. Revisá tu conexión.';
  }
  return error.response.data?.error || 'Ocurrió un error inesperado.';
}

export default api;


