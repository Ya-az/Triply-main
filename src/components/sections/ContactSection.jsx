import { useState } from 'react';
import { GlassButton } from '../ui/GlassButton.jsx';

const initialForm = {
  name: '',
  email: '',
  message: ''
};

export function ContactSection() {
  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus('success');
    setFormData(initialForm);
    setTimeout(() => setStatus(null), 5000);
  };

  return (
    <section id="contact" className="section-padding relative bg-white/70">
      <div className="absolute inset-0 bg-soft-mesh opacity-50" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-6 text-right lg:grid-cols-[1.1fr,0.9fr]">
        <div className="space-y-5">
          <span className="heading-gradient text-sm font-medium">تواصل معنا</span>
          <h2 className="font-display text-3xl text-triply-dark md:text-4xl">دعنا نخطط رحلتك القادمة</h2>
          <p className="max-w-xl text-base leading-7 text-triply-slate/75">
            أخبرنا عن أهدافك واحتياجاتك وسيتواصل معك أحد مستشارينا خلال 24 ساعة لتصميم رحلة متكاملة تناسبك.
          </p>
          <div className="grid gap-4 text-sm text-triply-slate/80">
            <div>
              <h3 className="font-semibold text-triply-dark">البريد الإلكتروني</h3>
              <a className="transition hover:text-triply" href="mailto:contact@triply.com">
                contact@triply.com
              </a>
            </div>
            <div>
              <h3 className="font-semibold text-triply-dark">الهاتف</h3>
              <a className="transition hover:text-triply" href="tel:+966501234567">
                +966 50 123 4567
              </a>
            </div>
            <div>
              <h3 className="font-semibold text-triply-dark">العنوان</h3>
              <p>جدة - المملكة العربية السعودية</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="glass-panel space-y-4 bg-white/80 p-8">
          <div className="grid gap-4 md:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm">
              الاسم الكامل
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="rounded-xl border border-triply-mint/40 bg-white/90 px-4 py-3 text-triply-dark shadow-soft focus:border-triply-accent focus:ring-0"
                placeholder="نورة علي"
                type="text"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm">
              البريد الإلكتروني
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="rounded-xl border border-triply-mint/40 bg-white/90 px-4 py-3 text-triply-dark shadow-soft focus:border-triply-accent focus:ring-0"
                placeholder="name@email.com"
                type="email"
              />
            </label>
          </div>
          <label className="flex flex-col gap-2 text-sm">
            رسالتك
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="rounded-2xl border border-triply-mint/40 bg-white/90 px-4 py-3 text-triply-dark shadow-soft focus:border-triply-accent focus:ring-0"
              placeholder="شاركنا تفاصيل الرحلة أو أهداف الفريق"
            />
          </label>
          <GlassButton type="submit" variant="primary" className="w-full">
            أرسل الطلب
          </GlassButton>
          {status === 'success' ? (
            <p className="rounded-2xl border border-triply-teal/30 bg-triply-mint/30 px-4 py-3 text-sm text-triply-dark">
              شكرًا لتواصلك! سنعود إليك خلال 24 ساعة.
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
