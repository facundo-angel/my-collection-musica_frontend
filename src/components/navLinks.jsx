import { HomeIcon, SearchIcon, LibraryIcon, PlaylistIcon, StatsIcon, UserIcon } from './Icons.jsx';

const navLinks = [
  { to: '/', label: 'Inicio', icon: <HomeIcon />, mobile: true },
  { to: '/explorar', label: 'Explorar', icon: <SearchIcon />, mobile: true },
  { to: '/biblioteca', label: 'Biblioteca', icon: <LibraryIcon />, mobile: true },
  { to: '/colecciones', label: 'Colecciones', icon: <PlaylistIcon />, mobile: false },
  { to: '/estadisticas', label: 'Estadísticas', icon: <StatsIcon />, mobile: true },
  { to: '/perfil', label: 'Perfil', icon: <UserIcon />, mobile: true },
];

export default navLinks;