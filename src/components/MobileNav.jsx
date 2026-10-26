import { NavLink } from 'react-router-dom';
import navLinks from './navLinks.jsx';
import './MobileNav.css';

function MobileNav() {
  const mobileLinks = navLinks.filter((link) => link.mobile);

  return (
    <nav className="mobile-nav">
      {mobileLinks.map((link) => (
        <NavLink key={link.to} to={link.to} end={link.to === '/'} className="mobile-nav__link">
          {link.icon}
          <span>{link.label}</span>
        </NavLink>
      ))}
    </nav>
  );
}

export default MobileNav;