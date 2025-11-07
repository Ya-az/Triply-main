const testimonials = [
  {
    name: 'مها الغامدي',
    role: 'مديرة تطوير الأعمال',
    quote:
      'Triply منح فريقنا تجربة سفر متكاملة وجاهزة للتنفيذ. كل التفاصيل من الرحلات وحتى البرامج التدريبية كانت مدروسة بعناية.',
    avatar: 'MG'
  },
  {
    name: 'سلمان الرويلي',
    role: 'قائد فريق تصميم',
    quote:
      'التواصل مع فريق Triply سريع وفعّال. تم تصميم رحلة الإلهام في سنغافورة خصيصاً لاحتياجات فريقنا الإبداعي.',
    avatar: 'SR'
  },
  {
    name: 'نورة السبيعي',
    role: 'مستشارة موارد بشرية',
    quote:
      'خدمة Triply تتجاوز التوقعات. حصلنا على تقارير يومية، جدولة متكاملة، وتجربة سفر راقية وآمنة لجميع المشاركات.',
    avatar: 'NS'
  }
];

function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-padding">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 text-right">
        <div className="space-y-4">
          <span className="heading-gradient text-sm font-medium">آراء العملاء</span>
          <h2 className="font-display text-3xl text-triply-dark md:text-4xl">قصص نجاح من شركائنا ورواد الأعمال</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="glass-panel flex h-full flex-col gap-5 p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-triply-teal/20 text-base font-semibold text-triply-dark">
                    {testimonial.avatar}
                  </span>
                  <div>
                    <p className="font-semibold text-triply-dark">{testimonial.name}</p>
                    <p className="text-xs text-triply-slate/70">{testimonial.role}</p>
                  </div>
                </div>
                <svg viewBox="0 0 24 24" className="h-6 w-6 text-triply-accent" fill="currentColor" aria-hidden="true">
                  <path d="M7.17 12.162c1.146.338 1.934 1.216 1.934 2.52 0 1.762-1.48 3.318-3.386 3.318-1.81 0-3.179-1.334-3.179-3.216 0-3.91 2.928-7.047 6.54-7.658l.455 1.318c-1.94.603-3.197 2.009-3.364 3.718Zm9.89 0c1.146.338 1.934 1.216 1.934 2.52 0 1.762-1.48 3.318-3.386 3.318-1.81 0-3.179-1.334-3.179-3.216 0-3.91 2.928-7.047 6.54-7.658l.455 1.318c-1.94.603-3.197 2.009-3.364 3.718Z" />
                </svg>
              </div>
              <p className="text-sm leading-7 text-triply-slate/80">{testimonial.quote}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export { TestimonialsSection };
