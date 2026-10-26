import useAuth from '../context/useAuth.js';

function Home() {
  const { user, loading } = useAuth();

  if (loading) {
    return <p>Probando sesión…</p>;
  }

  return <h1>Hola, {user ? user.displayName || user.username : 'invitado'}</h1>;
}

export default Home;