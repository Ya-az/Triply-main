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
    <footer className="relative mt-24 bg-triply-dark text-white">
      <div className="absolute inset-0 bg-soft-mesh opacity-80" aria-hidden="true" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img src={logo} alt="شعار Triply" className="h-12 w-12 rounded-xl bg-white/10 p-2" />
              <div>
                <h3 className="font-display text-2xl font-semibold">Triply</h3>
                <p className="text-sm text-white/70">رحلات متكاملة بتجربة تعليمية تفاعلية ترتقي بمسارك المهني والسياحي.</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <GlassButton variant="glass" size="sm">
                إصدار 3.0.0
              </GlassButton>
              <GlassButton variant="accent" size="sm">
                احجز ميثاق الرحلة
              </GlassButton>
            </div>
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:border-triply-mint/60 hover:bg-triply-mint/20"
                  aria-label={link.label}
                >
                  {iconMap[link.icon]}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">المصادر</h4>
            <ul className="space-y-2 text-sm text-white/70">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <a className="transition hover:text-white" href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">روابط سريعة</h4>
            <ul className="space-y-2 text-sm text-white/70">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <a className="transition hover:text-white" href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">تواصل معنا</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>البريد: contact@triply.com</li>
              <li>الهاتف: +966 50 123 4567</li>
              <li>العنوان: جدة - المملكة العربية السعودية</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/15 pt-6 text-sm text-white/70 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Triply. جميع الحقوق محفوظة.</p>
          <p>صنع بحب في المملكة العربية السعودية ❤️</p>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
