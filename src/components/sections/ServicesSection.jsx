import { services } from '../../data/services.js';
import { Card } from '../ui/Card.jsx';

function ServicesSection() {
  return (
    <section id="services" className="section-padding relative">
      <div className="absolute inset-x-0 top-0 -z-10 h-64 bg-triply-mint/20 blur-3xl" aria-hidden="true" />
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 text-right">
        <div className="space-y-4">
          <span className="heading-gradient text-sm font-medium">خدمات Triply المتكاملة</span>
          <h2 className="font-display text-3xl text-triply-dark md:text-4xl">كل تفاصيل الرحلة في مكان واحد</h2>
          <p className="max-w-2xl text-base leading-7 text-triply-slate/75">
            نؤمن بأن الرحلات الناجحة تبدأ من تخطيط دقيق. لذلك قمنا بتطوير مجموعة خدمات تغطي كل مرحلة من مراحل
            رحلتك مع فريق متخصص وخبرات عميقة في عالم السفر.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <Card key={service.id} heading={service.title} description={service.description} icon={service.icon} />
          ))}
        </div>
      </div>
    </section>
  );
}

export { ServicesSection };
