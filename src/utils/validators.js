/*se valida en los dos lados. El front valida para darle un aviso 
inmediato a quien usa la app, sin esperar al servidor. 
El backend vuelve a validar porque el front se puede saltear
(por ejemplo, con Postman), así que la validación que vale es la del servidor.*/

 const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const USERNAME_REGEX = /^[a-zA-Z0-9_]{3,30}$/;

export function validateLogin({ email, password }) {
  const errors = {};
  if (!email.trim()) errors.email = 'Ingresá tu correo';
  if (!password) errors.password = 'Ingresá tu contraseña';
  return errors;
}

export function validateRegister({ username, email, password, confirmPassword }) {
  const errors = {};

  if (!USERNAME_REGEX.test(username)) {
    errors.username = 'Entre 3 y 30 caracteres: letras, números o guion bajo';
  }
  if (!EMAIL_REGEX.test(email.trim())) {
    errors.email = 'Ingresá un correo válido';
  }
  if (password.length < 8 || password.length > 72) {
    errors.password = 'La contraseña debe tener entre 8 y 72 caracteres';
  }
  if (confirmPassword !== password) {
    errors.confirmPassword = 'Las contraseñas no coinciden';
  }

  return errors;
}