import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import { navigationLinks } from '../data/navigation.js';
import { GlassButton } from './ui/GlassButton.jsx';
import logo from '../assets/logo-triply.png';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    const savedUsername = localStorage.getItem('username');
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true' && savedUsername) {
      setUsername(savedUsername);
    }
  }, []);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const handleLogout = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('isLoggedIn');
    setUsername(null);
    navigate('/');
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/20 bg-white/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <a href="#hero" className="flex items-center gap-3 text-triply-dark">
          <img
            src={logo}
            alt="Triply logo"
            className="h-11 w-11 rounded-xl bg-gradient-to-br from-triply-mint/80 via-triply-teal/70 to-triply-accent/70 p-1 shadow-soft"
          />
          <span className="font-display text-2xl font-semibold tracking-tight">
            Triply
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {navigationLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-triply-slate/80 transition-colors duration-200 hover:text-triply"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          {username ? (
            <>
              <span className="rounded-full bg-triply-mint/20 px-4 py-2 text-sm font-medium text-triply-dark">
                مرحباً، {username}
              </span>
              <GlassButton variant="outline" size="sm" onClick={handleLogout}>
                تسجيل الخروج
              </GlassButton>
            </>
          ) : (
            <>
              <Link to="/login">
                <GlassButton variant="outline" size="sm">
                  تسجيل الدخول
                </GlassButton>
              </Link>
              <Link to="/signup">
                <GlassButton variant="primary" size="sm">ابدأ رحلتك</GlassButton>
              </Link>
            </>
          )}
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-triply-mint/40 bg-white/70 text-triply-dark shadow-soft transition duration-200 hover:border-triply-accent/70 hover:text-triply lg:hidden"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-label="قائمة التنقل"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            className="h-6 w-6"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      <div
        className={clsx(
          'lg:hidden transition-all duration-300 ease-emphasized overflow-hidden border-t border-white/30 bg-white/85 backdrop-blur-xl',
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <nav className="flex flex-col gap-2 px-6 py-4">
          {navigationLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-2xl px-4 py-2 text-sm font-medium text-triply-dark/80 transition-colors duration-150 hover:bg-triply-mint/40 hover:text-triply"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="mt-3 flex flex-col gap-2">
            {username ? (
              <>
                <div className="rounded-xl bg-triply-mint/20 px-4 py-3 text-center text-sm font-medium text-triply-dark">
                  مرحباً، {username}
                </div>
                <GlassButton variant="outline" size="sm" className="w-full" onClick={() => { handleLogout(); setIsOpen(false); }}>
                  تسجيل الخروج
                </GlassButton>
              </>
            ) : (
              <>
                <Link to="/login" className="w-full" onClick={() => setIsOpen(false)}>
                  <GlassButton variant="outline" size="sm" className="w-full">
                    تسجيل الدخول
                  </GlassButton>
                </Link>
                <Link to="/signup" className="w-full" onClick={() => setIsOpen(false)}>
                  <GlassButton variant="primary" size="sm" className="w-full">
                    ابدأ رحلتك
                  </GlassButton>
                </Link>
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
