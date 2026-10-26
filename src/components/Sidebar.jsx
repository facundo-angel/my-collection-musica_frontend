import { NavLink } from 'react-router-dom';
import { LogoIcon } from './Icons.jsx';
import navLinks from './navLinks.jsx';
import './Sidebar.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar__logo">
        <LogoIcon />
        <span>My Collection</span>
      </div>

      <nav className="sidebar__nav">
        {navLinks.map((link) => (
          <NavLink key={link.to} to={link.to} end={link.to === '/'} className="sidebar__link">
            {link.icon}
            {link.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;