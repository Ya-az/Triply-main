import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext.jsx';
import ThemeToggle from '../components/ui/ThemeToggle.jsx';
import { BrandLogo } from '../components/BrandLogo.jsx';

function AuthLayout({ children }) {
  const { theme } = useTheme();

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-gradient-to-br from-triply-sand via-triply-mint to-white dark:from-dark-bg dark:via-dark-surface dark:to-dark-elevated px-6 py-12">
      {/* Theme Toggle */}
      <div className="absolute top-6 right-6 z-10">
        <ThemeToggle />
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30 dark:opacity-20" aria-hidden="true">
        <div className="absolute -left-32 top-20 h-64 w-64 rounded-full bg-triply-mint dark:bg-triply-teal blur-3xl" />
        <div className="absolute -right-32 bottom-20 h-64 w-64 rounded-full bg-triply-accent dark:bg-triply-accentLight blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-triply-teal dark:bg-triply blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative w-full max-w-md">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <Link to="/" className="group flex flex-col items-center gap-3">
            <div className="group-hover:scale-105 transition-transform duration-300">
              <BrandLogo showText size="lg" />
            </div>
          </Link>
        </div>

        {/* Card */}
        <div className="rounded-2xl border border-triply-mint/30 dark:border-dark-border/50 bg-white/95 dark:bg-dark-elevated/95 p-8 shadow-2xl backdrop-blur-xl md:p-10">
          {children}
        </div>

        {/* Footer text */}
        <p className="mt-6 text-center text-sm text-triply-slate/70 dark:text-dark-text-secondary">
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
