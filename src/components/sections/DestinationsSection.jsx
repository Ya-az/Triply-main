import { destinations } from '../../data/destinations.js';

function DestinationsSection() {
  return (
    <section id="destinations" className="section-padding bg-white/60 dark:bg-dark-surface/40">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 text-right">
        <div className="space-y-4">
          <span className="heading-gradient text-sm font-medium">وجهات مختارة بعناية</span>
          <h2 className="font-display text-3xl text-triply-dark dark:text-dark-text-primary md:text-4xl">مسارات حصرية تلهم الفرق والأفراد</h2>
          <p className="max-w-2xl text-base leading-7 text-triply-slate/75 dark:text-dark-text-secondary">
            يقدم Triply مجموعة وجهات عالمية مصممة لتناسب أهدافك الشخصية أو المؤسسية، مع تنوع بين الثقافة، المغامرة،
            والرفاهية.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {destinations.map((destination) => (
            <article
              key={destination.name}
              className="group overflow-hidden rounded-2xl border border-triply-mint/40 dark:border-dark-border/50 bg-white/70 dark:bg-dark-elevated/60 shadow-soft dark:shadow-soft-dark transition duration-300 hover:-translate-y-1 hover:shadow-ambient dark:hover:shadow-ambient-dark"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-triply-dark/60 via-triply-dark/10 to-transparent" />
                <span className="absolute right-4 top-4 rounded-full bg-white/80 dark:bg-dark-elevated/90 px-3 py-1 text-xs font-medium text-triply-dark dark:text-dark-text-primary shadow-soft dark:shadow-soft-dark">
                  {destination.duration}
                </span>
              </div>
              <div className="space-y-3 p-6">
                <h3 className="font-display text-lg text-triply-dark dark:text-dark-text-primary">{destination.name}</h3>
                <p className="text-sm text-triply-slate/75 dark:text-dark-text-secondary">{destination.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export { DestinationsSection };
