const destinations = [
  {
    name: 'لندن - المملكة المتحدة',
    description: 'نبض الفن والثقافة الأوروبية مع برنامج مبتكر لخبرات الأعمال والترفيه.',
    duration: '7 أيام • تجارب حضرية',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'باريس - فرنسا',
    description: 'جولة فاخرة في عاصمة النور تشمل روائع الفن ومختبرات الطهو الراقية.',
    duration: '6 أيام • إلهام ثقافي',
    image: 'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'القاهرة - مصر',
    description: 'رحلة تاريخية حول أهرامات الجيزة مع ورشات لبناء فرق قوية.',
    duration: '5 أيام • تجربة تاريخية',
    image: 'https://images.unsplash.com/photo-1572252009286-268acec5ca0a?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'إسطنبول - تركيا',
    description: 'ملتقى الشرق والغرب مع جولات في البازارات العثمانية ورحلات بحرية.',
    duration: '6 أيام • ثقافة هجينة',
    image: 'https://images.unsplash.com/photo-1527838832700-5059252407fa?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'دبي - الإمارات العربية المتحدة',
    description: 'وجهة مستقبلية تجمع بين الأعمال والرفاهية مع تجارب صحراوية فريدة.',
    duration: '4 أيام • رفاهية عصرية',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80'
  }
];

export function DestinationsSection() {
  return (
    <section id="destinations" className="section-padding bg-white/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 text-right">
        <div className="space-y-4">
          <span className="heading-gradient text-sm font-medium">وجهات مختارة بعناية</span>
          <h2 className="font-display text-3xl text-triply-dark md:text-4xl">مسارات حصرية تلهم الفرق والأفراد</h2>
          <p className="max-w-2xl text-base leading-7 text-triply-slate/75">
            يقدم Triply مجموعة وجهات عالمية مصممة لتناسب أهدافك الشخصية أو المؤسسية، مع تنوع بين الثقافة، المغامرة،
            والرفاهية.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {destinations.map((destination) => (
            <article
              key={destination.name}
              className="group overflow-hidden rounded-2xl border border-triply-mint/40 bg-white/70 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-ambient"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-triply-dark/60 via-triply-dark/10 to-transparent" />
                <span className="absolute right-4 top-4 rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-triply-dark shadow-soft">
                  {destination.duration}
                </span>
              </div>
              <div className="space-y-3 p-6">
                <h3 className="font-display text-lg text-triply-dark">{destination.name}</h3>
                <p className="text-sm text-triply-slate/75">{destination.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
