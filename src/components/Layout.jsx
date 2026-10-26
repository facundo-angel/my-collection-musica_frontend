import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar.jsx';
import MobileNav from './MobileNav.jsx';
import PlayerBar from './PlayerBar.jsx';
import './Layout.css';

function Layout() {
  return (
    <div className="layout">
      <Sidebar />
      <main className="layout__main">
        <Outlet />
      </main>
      <PlayerBar />
      <MobileNav />
    </div>
  );
}

export default Layout;