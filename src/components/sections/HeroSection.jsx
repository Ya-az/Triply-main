import { GlassButton } from '../ui/GlassButton.jsx';

function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden bg-hero-gradient">
      <div className="absolute inset-0 opacity-30" aria-hidden="true">
        <div className="absolute -left-24 top-12 h-44 w-44 rounded-full bg-triply-mint/40 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-56 w-56 rounded-full bg-triply-accent/40 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-6xl px-6 py-24 text-right text-white md:py-28">
        <div className="grid items-center gap-14 md:grid-cols-[1.2fr,1fr]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1 text-sm font-medium shadow-soft">
              أحدث الحلول الذكية للسفر
            </span>
            <h1 className="font-display text-4xl leading-snug md:text-5xl">
              رحلات متكاملة تبدأ من فكرة وتصل إلى تجربة لا تُنسى
            </h1>
            <p className="max-w-xl text-base leading-8 text-white/80">
              Triply توفر لك تخطيطاً ذكياً للرحلة من اختيار الوجهة وحتى عودة المسافرين. فريق متخصص، محتوى عربي ثري،
              ودعم فوري على مدار الساعة.
            </p>
            <div className="flex flex-wrap justify-end gap-4">
              <a href="#booking">
                <GlassButton variant="primary" size="lg">
                  احجز استشارتك المجانية
                </GlassButton>
              </a>
              <a href="#services">
                <GlassButton variant="glass" size="lg">
                  تعرف على المنصة
                </GlassButton>
              </a>
            </div>
            <dl className="mt-8 grid grid-cols-2 gap-6 text-sm text-white/80 md:grid-cols-4">
              <div>
                <dt className="font-semibold">+1200 رحلة ناجحة</dt>
                <dd>منذ 2019</dd>
              </div>
              <div>
                <dt className="font-semibold">+300 شريك عالمي</dt>
                <dd>فنادق وطيران</dd>
              </div>
              <div>
                <dt className="font-semibold">+95% رضا العملاء</dt>
                <dd>تقييم 4.9/5</dd>
              </div>
              <div>
                <dt className="font-semibold">24/7 دعم مباشر</dt>
                <dd>مستشار رحلات</dd>
              </div>
            </dl>
          </div>
          <div className="glass-panel relative hidden h-full flex-col justify-center gap-6 rounded-3xl bg-white/80 p-8 text-triply-dark shadow-ambient md:flex">
            <h2 className="mb-2 text-lg font-semibold">مسارات مميزة</h2>
            <div className="space-y-5 text-sm">
              <div className="rounded-2xl border border-triply-mint/40 bg-triply-mint/15 p-4">
                <p className="font-semibold">دبي - الإمارات</p>
                <span className="text-triply-slate/70">7 أيام • رحلة رفاهية • تجارب فاخرة</span>
              </div>
              <div className="rounded-2xl border border-triply-accent/40 bg-triply-accent/10 p-4">
                <p className="font-semibold">القاهرة - مصر</p>
                <span className="text-triply-slate/70">4 أيام • جولات تاريخية • أهرامات الجيزة</span>
              </div>
              <div className="rounded-2xl border border-triply-teal/40 bg-triply-teal/10 p-4">
                <p className="font-semibold">لندن - بريطانيا</p>
                <span className="text-triply-slate/70">5 أيام • معالم سياحية • مرشد عربي</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { HeroSection };
