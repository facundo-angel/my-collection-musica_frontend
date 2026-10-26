import { LogoIcon } from './Icons.jsx';
import './AuthLayout.css';

function AuthLayout({ claim, tagline, title, subtitle, children }) {
  return (
    <div className="auth">
      <section className="auth__brand">
        <div className="auth__logo">
          <LogoIcon />
          <span>My Collection</span>
        </div>

        <div>
          <h1 className="auth__claim">{claim}</h1>
          <p className="auth__tagline">{tagline}</p>
        </div>

        <small className="auth__footer">TP Final EFSI & DAI 2026</small>
      </section>

      <section className="auth__panel">
        <div className="auth__card">
          <h2 className="auth__title">{title}</h2>
          <p className="auth__subtitle">{subtitle}</p>
          {children}
        </div>
      </section>
    </div>
  );
}

export default AuthLayout;