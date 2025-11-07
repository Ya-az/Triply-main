import { useState } from 'react';
import { GlassButton } from '../ui/GlassButton.jsx';
import { formHelpers } from '../../data/formHelpers.js';
import { FormHelper } from '../ui/FormHelper.jsx';

const initialForm = {
  name: '',
  email: '',
  message: ''
};

function ContactSection() {
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
    <section id="contact" className="section-padding relative bg-white/70 dark:bg-dark-surface/50">
      <div className="absolute inset-0 bg-soft-mesh opacity-50 dark:opacity-30" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-6 text-right lg:grid-cols-[1.1fr,0.9fr]">
        <div className="space-y-5">
          <span className="heading-gradient text-sm font-medium">تواصل معنا</span>
          <h2 className="font-display text-3xl text-triply-dark dark:text-dark-text-primary md:text-4xl">دعنا نخطط رحلتك القادمة</h2>
          <p className="max-w-xl text-base leading-7 text-triply-slate/75 dark:text-dark-text-secondary">
            أخبرنا عن أهدافك واحتياجاتك وسيتواصل معك أحد مستشارينا خلال 24 ساعة لتصميم رحلة متكاملة تناسبك.
          </p>
          <div className="grid gap-4 text-sm text-triply-slate/80 dark:text-dark-text-secondary">
            <div>
              <h3 className="font-semibold text-triply-dark dark:text-dark-text-primary">البريد الإلكتروني</h3>
              <a className="transition hover:text-triply dark:hover:text-triply-mint" href="mailto:contact@triply.com">
                contact@triply.com
              </a>
            </div>
            <div>
              <h3 className="font-semibold text-triply-dark dark:text-dark-text-primary">الهاتف</h3>
              <a className="transition hover:text-triply dark:hover:text-triply-mint" href="tel:+966501234567">
                +966 50 123 4567
              </a>
            </div>
            <div>
              <h3 className="font-semibold text-triply-dark dark:text-dark-text-primary">العنوان</h3>
              <p>جدة - المملكة العربية السعودية</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="glass-panel space-y-4 bg-white/80 dark:bg-dark-elevated/60 p-8">
          <div className="grid gap-4 md:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm text-triply-dark dark:text-dark-text-primary">
              {formHelpers.contact.name.label}
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="rounded-xl border border-triply-mint/40 dark:border-dark-border/50 bg-white/90 dark:bg-dark-surface/80 px-4 py-3 text-triply-dark dark:text-dark-text-primary shadow-soft dark:shadow-soft-dark focus:border-triply-accent dark:focus:border-triply-mint focus:ring-0"
                placeholder={formHelpers.contact.name.placeholder}
                type="text"
              />
              <FormHelper text={formHelpers.contact.name.helper} />
            </label>
            <label className="flex flex-col gap-2 text-sm text-triply-dark dark:text-dark-text-primary">
              {formHelpers.contact.email.label}
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="rounded-xl border border-triply-mint/40 dark:border-dark-border/50 bg-white/90 dark:bg-dark-surface/80 px-4 py-3 text-triply-dark dark:text-dark-text-primary shadow-soft dark:shadow-soft-dark focus:border-triply-accent dark:focus:border-triply-mint focus:ring-0"
                placeholder={formHelpers.contact.email.placeholder}
                type="email"
              />
              <FormHelper text={formHelpers.contact.email.helper} />
            </label>
          </div>
          <label className="flex flex-col gap-2 text-sm text-triply-dark dark:text-dark-text-primary">
            {formHelpers.contact.message.label}
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="rounded-2xl border border-triply-mint/40 dark:border-dark-border/50 bg-white/90 dark:bg-dark-surface/80 px-4 py-3 text-triply-dark dark:text-dark-text-primary shadow-soft dark:shadow-soft-dark focus:border-triply-accent dark:focus:border-triply-mint focus:ring-0"
              placeholder={formHelpers.contact.message.placeholder}
            />
            <FormHelper text={formHelpers.contact.message.helper} />
          </label>
          <GlassButton type="submit" variant="primary" className="w-full">
            أرسل الطلب
          </GlassButton>
          {status === 'success' ? (
            <p
              className="rounded-2xl border border-triply-teal/30 dark:border-triply-teal/50 bg-triply-mint/30 dark:bg-triply-teal/20 px-4 py-3 text-sm text-triply-dark dark:text-dark-text-primary"
              role="status"
              aria-live="polite"
            >
              شكرًا لتواصلك! سنعود إليك خلال 24 ساعة.
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}

export { ContactSection };
