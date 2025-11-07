import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import logo from '../assets/logo-triply.svg';

function AuthLayout({ children }) {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-gradient-to-br from-triply via-triply-teal to-triply-dark px-6 py-12">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20" aria-hidden="true">
        <div className="absolute -left-32 top-20 h-64 w-64 rounded-full bg-triply-mint blur-3xl" />
        <div className="absolute -right-32 bottom-20 h-64 w-64 rounded-full bg-triply-accent blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-triply-teal blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative w-full max-w-md">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Triply Logo"
              className="h-14 w-14 rounded-xl bg-white/20 p-2 backdrop-blur-sm"
            />
            <span className="font-display text-3xl font-bold text-white">Triply</span>
          </Link>
        </div>

        {/* Card */}
        <div className="rounded-2xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-md md:p-10">
          {children}
        </div>

        {/* Footer text */}
        <p className="mt-6 text-center text-sm text-white/70">
          © 2025 Triply. جميع الحقوق محفوظة
        </p>
      </div>
    </div>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export { AuthLayout };
