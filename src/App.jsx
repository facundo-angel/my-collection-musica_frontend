import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Explore from './pages/Explore.jsx';
import TrackDetail from './pages/TrackDetail.jsx';
import Library from './pages/Library.jsx';
import Collections from './pages/Collections.jsx';
import CollectionDetail from './pages/CollectionDetail.jsx';
import Profile from './pages/Profile.jsx';
import Stats from './pages/Stats.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import NotFound from './pages/NotFound.jsx';
import Layout from './components/Layout.jsx';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/registro" element={<Register />} />

      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/explorar" element={<Explore />} />
        <Route path="/cancion/:id" element={<TrackDetail />} />
        <Route path="/biblioteca" element={<Library />} />
        <Route path="/colecciones" element={<Collections />} />
        <Route path="/colecciones/:id" element={<CollectionDetail />} />
        <Route path="/perfil" element={<Profile />} />
        <Route path="/estadisticas" element={<Stats />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;