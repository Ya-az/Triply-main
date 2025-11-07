import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    { id: 1, value: 1200, suffix: '+', label: 'رحلة ناجحة', icon: '✈️' },
    { id: 2, value: 5000, suffix: '+', label: 'عميل سعيد', icon: '😊' },
    { id: 3, value: 300, suffix: '+', label: 'شريك عالمي', icon: '🤝' },
    { id: 4, value: 95, suffix: '%', label: 'رضا العملاء', icon: '⭐' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-padding relative overflow-hidden bg-gradient-to-br from-triply via-triply-teal to-triply-dark dark:from-dark-bg dark:via-dark-surface dark:to-dark-elevated"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <div className="absolute top-10 right-20 w-32 h-32 bg-white dark:bg-triply-mint rounded-full blur-2xl" />
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-white dark:bg-triply-mint rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl text-white dark:text-dark-text-primary md:text-4xl mb-4">
            أرقامنا تتحدث عن نفسها
          </h2>
          <p className="text-white/80 dark:text-dark-text-secondary text-base leading-7">
            نفخر بثقة عملائنا وشركائنا حول العالم
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.id}
              stat={stat}
              isVisible={isVisible}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({ stat, isVisible, delay }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = stat.value / steps;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        currentStep++;
        setCount(Math.min(Math.round(increment * currentStep), stat.value));

        if (currentStep >= steps) {
          clearInterval(interval);
        }
      }, stepDuration);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [isVisible, stat.value, delay]);

  return (
    <div
      className="group relative overflow-hidden rounded-2xl bg-white/10 dark:bg-dark-elevated/40 backdrop-blur-md border border-white/20 dark:border-dark-border/30 p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:bg-white/15 dark:hover:bg-dark-elevated/60 hover:shadow-2xl"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: `all 0.6s ease-out ${delay}ms`
      }}
    >
      {/* Icon */}
      <div className="mb-4 text-4xl">{stat.icon}</div>

      {/* Animated Number */}
      <div className="mb-2 font-display text-4xl font-bold text-white dark:text-dark-text-primary md:text-5xl">
        {count.toLocaleString('ar-SA')}
        <span className="text-triply-accentLight dark:text-triply-mint">{stat.suffix}</span>
      </div>

      {/* Label */}
      <p className="text-sm font-medium text-white/80 dark:text-dark-text-secondary">
        {stat.label}
      </p>

      {/* Hover effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-triply-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
}

StatCard.propTypes = {
  stat: PropTypes.shape({
    id: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
    suffix: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  }).isRequired,
  isVisible: PropTypes.bool.isRequired,
  delay: PropTypes.number.isRequired
};

export { StatsSection };
