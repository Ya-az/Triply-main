import logo from '../assets/logo-triply.svg';
import { GlassButton } from './ui/GlassButton.jsx';
import { resourceLinks, socialLinks, supportLinks } from '../data/footerLinks.js';

const iconMap = {
  instagram: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm-5 3.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm5.75-.9a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0Z" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452H16.89v-5.356c0-1.277-.023-2.919-1.778-2.919-1.78 0-2.053 1.386-2.053 2.819v5.456H9.503V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.372-1.85 3.605 0 4.27 2.373 4.27 5.461v6.28ZM5.337 7.433a1.978 1.978 0 1 1 0-3.956 1.978 1.978 0 0 1 0 3.956ZM7.119 20.452H3.55V9h3.569v11.452Z" />
    </svg>
  ),
  twitter: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M20.207 7.183c.014.2.014.399.014.6 0 6.123-4.66 13.176-13.176 13.176a13.07 13.07 0 0 1-7.107-2.084A9.34 9.34 0 0 0 9.08 15.9a4.73 4.73 0 0 1-4.414-3.274 5.96 5.96 0 0 0 .894.07 4.99 4.99 0 0 0 1.242-.162 4.72 4.72 0 0 1-3.785-4.63v-.06a4.75 4.75 0 0 0 2.14.6 4.72 4.72 0 0 1-2.102-3.928 4.67 4.67 0 0 1 .64-2.385A13.419 13.419 0 0 0 11.44 7.68a5.33 5.33 0 0 1-.12-1.08 4.73 4.73 0 0 1 8.178-3.24 9.25 9.25 0 0 0 3-1.143 4.72 4.72 0 0 1-2.08 2.607 9.45 9.45 0 0 0 2.719-.732 10.167 10.167 0 0 1-2.93 3.09Z" />
    </svg>
  ),
  youtube: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M21.8 7.001a2.498 2.498 0 0 0-1.757-1.77C18.289 4.8 12 4.8 12 4.8s-6.289 0-8.043.43A2.499 2.499 0 0 0 2.2 7C1.8 8.754 1.8 12 1.8 12s0 3.246.43 5c.234.873.92 1.556 1.793 1.79 1.754.43 8.043.43 8.043.43s6.289 0 8.043-.43a2.498 2.498 0 0 0 1.757-1.77c.43-1.754.43-5 .43-5s0-3.246-.43-5ZM9.75 15.568V8.432L15.568 12 9.75 15.568Z" />
    </svg>
  )
};

function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-gradient-to-br from-triply-dark via-triply-dark to-triply/90 dark:from-dark-elevated dark:via-dark-surface dark:to-dark-bg text-white dark:text-dark-text-primary">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-20 dark:opacity-10 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-triply-mint/30 dark:bg-triply-teal/20 blur-3xl" />
        <div className="absolute bottom-0 right-1/3 h-80 w-80 rounded-full bg-triply-accent/30 dark:bg-triply-mint/20 blur-3xl" />
      </div>
      
      {/* Top decorative line */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-triply-mint to-transparent dark:from-transparent dark:via-triply-teal dark:to-transparent" />
      
      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative h-14 w-14 rounded-xl bg-gradient-to-br from-triply-mint to-triply-teal dark:from-triply-teal dark:to-triply-mint p-0.5 shadow-xl">
                <div className="h-full w-full rounded-xl bg-white/95 dark:bg-dark-surface/95 p-2 flex items-center justify-center">
                  <img src={logo} alt="شعار Triply" className="h-full w-full object-contain" />
                </div>
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-white dark:text-dark-text-primary">Triply</h3>
                <p className="text-sm text-white/80 dark:text-dark-text-secondary">رحلات تجمع المتعة والتعلم</p>
              </div>
            </div>
            
            <p className="text-sm leading-6 text-white/75 dark:text-dark-text-secondary max-w-xs">
              رحلات متكاملة بتجربة تعليمية تفاعلية ترتقي بمسارك المهني والسياحي.
            </p>
            
            <div className="flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/30 dark:border-dark-border/50 bg-white/10 dark:bg-dark-surface/40 px-4 py-2 text-xs font-semibold backdrop-blur-sm">
                <svg className="w-3.5 h-3.5 text-triply-mint" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                إصدار 3.0.0
              </div>
              <GlassButton variant="accent" size="sm" className="shadow-lg">
                احجز ميثاق الرحلة
              </GlassButton>
            </div>
            
            <div>
              <h5 className="text-xs font-semibold text-white/60 dark:text-dark-text-secondary uppercase tracking-wide mb-3">تابعنا</h5>
              <div className="flex items-center gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="group relative inline-flex h-11 w-11 items-center justify-center rounded-xl border-2 border-white/20 dark:border-dark-border/40 bg-white/5 dark:bg-dark-surface/40 text-white dark:text-dark-text-primary transition-all hover:border-triply-mint dark:hover:border-triply-teal hover:bg-triply-mint/20 dark:hover:bg-triply-teal/30 hover:-translate-y-1 hover:shadow-lg overflow-hidden"
                    aria-label={link.label}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-triply-mint/0 to-triply-teal/0 group-hover:from-triply-mint/10 group-hover:to-triply-teal/10 transition-all" />
                    <span className="relative group-hover:scale-110 transition-transform">{iconMap[link.icon]}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h4 className="mb-5 text-sm font-bold text-white dark:text-dark-text-primary uppercase tracking-wide flex items-center gap-2">
              <span className="h-1 w-8 rounded-full bg-gradient-to-r from-triply-mint to-triply-teal" />
              المصادر
            </h4>
            <ul className="space-y-3 text-sm">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <a className="group inline-flex items-center gap-2 text-white/75 dark:text-dark-text-secondary transition-all hover:text-white dark:hover:text-dark-text-primary hover:translate-x-1" href={link.href}>
                    <svg className="w-3.5 h-3.5 text-triply-mint dark:text-triply-teal opacity-0 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-sm font-bold text-white dark:text-dark-text-primary uppercase tracking-wide flex items-center gap-2">
              <span className="h-1 w-8 rounded-full bg-gradient-to-r from-triply-teal to-triply-accent" />
              روابط سريعة
            </h4>
            <ul className="space-y-3 text-sm">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <a className="group inline-flex items-center gap-2 text-white/75 dark:text-dark-text-secondary transition-all hover:text-white dark:hover:text-dark-text-primary hover:translate-x-1" href={link.href}>
                    <svg className="w-3.5 h-3.5 text-triply-mint dark:text-triply-teal opacity-0 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-sm font-bold text-white dark:text-dark-text-primary uppercase tracking-wide flex items-center gap-2">
              <span className="h-1 w-8 rounded-full bg-gradient-to-r from-triply-accent to-triply" />
              تواصل معنا
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 text-white/75 dark:text-dark-text-secondary group">
                <svg className="w-5 h-5 text-triply-mint dark:text-triply-teal flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a href="mailto:contact@triply.com" className="hover:text-white dark:hover:text-dark-text-primary transition-colors">contact@triply.com</a>
              </li>
              <li className="flex items-start gap-3 text-white/75 dark:text-dark-text-secondary group">
                <svg className="w-5 h-5 text-triply-mint dark:text-triply-teal flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <a href="tel:+966501234567" className="hover:text-white dark:hover:text-dark-text-primary transition-colors">+966 50 123 4567</a>
              </li>
              <li className="flex items-start gap-3 text-white/75 dark:text-dark-text-secondary group">
                <svg className="w-5 h-5 text-triply-mint dark:text-triply-teal flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>جدة - المملكة العربية السعودية</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t-2 border-white/10 dark:border-dark-border/30 pt-8 text-sm">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <p className="text-white/70 dark:text-dark-text-secondary flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
              </svg>
              © {new Date().getFullYear()} Triply. جميع الحقوق محفوظة.
            </p>
            <p className="text-white/70 dark:text-dark-text-secondary flex items-center gap-2">
              صنع بحب في المملكة العربية السعودية
              <span className="text-red-400 animate-pulse">❤️</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
