import { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import AuthLayout from '../components/AuthLayout.jsx';
import FormField from '../components/FormField.jsx';
import Button from '../components/Button.jsx';
import useAuth from '../context/useAuth.js';
import { getErrorMessage } from '../services/api.js';
import { validateRegister } from '../utils/validators.js';

const EMPTY_FORM = { username: '', email: '', password: '', confirmPassword: '' };

function Register() {
  const { user, register } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState(EMPTY_FORM);
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

    const newErrors = validateRegister(form);
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setSending(true);
    setServerError('');
    try {
      await register({
        username: form.username,
        email: form.email.trim(),
        password: form.password,
      });
      navigate('/');
    } catch (error) {
      setServerError(getErrorMessage(error));
    } finally {
      setSending(false);
    }
  }

  return (
    <AuthLayout
      claim={<>Empezá tu<br />colección.</>}
      tagline="Creá tu cuenta gratis y armá tu biblioteca musical."
      title="Crear cuenta"
      subtitle="Completá tus datos para registrarte."
    >
      <form className="auth__form" onSubmit={handleSubmit} noValidate>
        <FormField
          label="Nombre de usuario"
          name="username"
          placeholder="mica.b"
          autoComplete="username"
          value={form.username}
          onChange={handleChange}
          error={errors.username}
        />
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
          placeholder="Mínimo 8 caracteres"
          autoComplete="new-password"
          value={form.password}
          onChange={handleChange}
          error={errors.password}
        />
        <FormField
          label="Confirmar contraseña"
          name="confirmPassword"
          type="password"
          placeholder="Repetí la contraseña"
          autoComplete="new-password"
          value={form.confirmPassword}
          onChange={handleChange}
          error={errors.confirmPassword}
        />

        {serverError && <p className="auth__server-error">{serverError}</p>}

        <Button type="submit" disabled={sending}>
          {sending ? 'Creando cuenta…' : 'Crear cuenta'}
        </Button>

        <p className="auth__switch">
          ¿Ya tenés cuenta? <Link to="/login">Iniciá sesión</Link>
        </p>
      </form>
    </AuthLayout>
  );
}

export default Register;

/*confirmPassword se valida solo en el front y no se manda al backend.
 Sirve para que quien se registra no se equivoque al tipear; al servidor le 
 alcanza con una contraseña.
Si el registro sale bien, queda logueada directo (el backend deja la cookie),
 por eso va al inicio.*/ 