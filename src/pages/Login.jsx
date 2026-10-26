/*Formulario controlado: cada input muestra el valor del estado form,
 y handleChange lo actualiza. Así React siempre sabe qué escribió el
  usuario. [name]: value usa el atributo name del input para saber qué 
  campo cambiar. Una sola función sirve para todos los campos. 
  noValidate apaga los mensajes automáticos del navegador
  sending desactiva el botón mientras espera la respuesta. 
  Es el “estado de carga” que pide la consigna, y evita que se envíe dos veces. 
  Si ya hay sesión, <Navigate> te manda al inicio. Un usuario logueado no tiene 
  por qué ver el login. El aviso de sesión vencida usa el sessionExpired del Context,
  que se activa con el interceptor de Axios.*/

   import { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import AuthLayout from '../components/AuthLayout.jsx';
import FormField from '../components/FormField.jsx';
import Button from '../components/Button.jsx';
import useAuth from '../context/useAuth.js';
import { getErrorMessage } from '../services/api.js';
import { validateLogin } from '../utils/validators.js';

function Login() {
  const { user, login, sessionExpired } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState('');
  const [sending, setSending] = useState(false);

  if (user) {
    return <Navigate to="/" replace />;
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: '' });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const newErrors = validateLogin(form);
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setSending(true);
    setServerError('');
    try {
      await login(form.email, form.password);
      navigate('/');
    } catch (error) {
      setServerError(getErrorMessage(error));
    } finally {
      setSending(false);
    }
  }

  return (
    <AuthLayout
      claim={<>Tu música,<br />tu colección.</>}
      tagline="Guardá canciones, armá playlists, puntuá lo que escuchás y mirá tu propio Wrapped."
      title="Iniciar sesión"
      subtitle="Entrá para ver tu biblioteca y tus playlists."
    >
      <form className="auth__form" onSubmit={handleSubmit} noValidate>
        {sessionExpired && (
          <p className="auth__server-error">Tu sesión expiró. Volvé a iniciar sesión.</p>
        )}

        <FormField
          label="Correo electrónico"
          name="email"
          type="email"
          placeholder="tu@mail.com"
          autoComplete="email"
          value={form.email}
          onChange={handleChange}
          error={errors.email}
        />
        <FormField
          label="Contraseña"
          name="password"
          type="password"
          placeholder="••••••••"
          autoComplete="current-password"
          value={form.password}
          onChange={handleChange}
          error={errors.password}
        />

        {serverError && <p className="auth__server-error">{serverError}</p>}

        <Button type="submit" disabled={sending}>
          {sending ? 'Ingresando…' : 'Ingresar'}
        </Button>

        <p className="auth__switch">
          ¿No tenés cuenta? <Link to="/registro">Registrate</Link>
        </p>
      </form>
    </AuthLayout>
  );
}

export default Login;