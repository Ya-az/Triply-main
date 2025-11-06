import { useState } from 'react';
import { GlassButton } from '../ui/GlassButton.jsx';

const services = [
  { id: 'flight', name: 'حجز طيران', icon: '✈️' },
  { id: 'hotel', name: 'حجز فنادق', icon: '🏨' },
  { id: 'restaurant', name: 'حجز مطاعم', icon: '🍽️' },
  { id: 'activities', name: 'أنشطة وجولات', icon: '🎯' }
];

const budgetLevels = [
  { id: 'economy', name: 'اقتصادي', description: 'خيارات موفرة ومريحة', color: 'triply-teal' },
  { id: 'standard', name: 'متوسط', description: 'توازن بين السعر والجودة', color: 'triply' },
  { id: 'luxury', name: 'فاخر', description: 'تجربة راقية ومميزة', color: 'triply-accent' }
];

const destinations = [
  'لندن - المملكة المتحدة',
  'باريس - فرنسا',
  'القاهرة - مصر',
  'إسطنبول - تركيا',
  'دبي - الإمارات العربية المتحدة'
];

export function BookingSection() {
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedBudget, setSelectedBudget] = useState('');
  const [selectedDestination, setSelectedDestination] = useState('');

  const toggleService = (serviceId) => {
    setSelectedServices((prev) =>
      prev.includes(serviceId) ? prev.filter((id) => id !== serviceId) : [...prev, serviceId]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      destination: selectedDestination,
      services: selectedServices,
      budget: selectedBudget
    });
    alert('تم استلام طلب الحجز! سيتم التواصل معك قريباً.');
  };

  return (
    <section id="booking" className="section-padding bg-gradient-to-b from-white via-triply-sand/30 to-white">
      <div className="mx-auto max-w-4xl px-6 text-right">
        <div className="mb-10 space-y-3 text-center">
          <span className="inline-block rounded-full bg-triply-mint/20 px-4 py-1 text-sm font-medium text-triply">
            احجز رحلتك المخصصة
          </span>
          <h2 className="font-display text-3xl text-triply-dark md:text-4xl">
            صمم رحلتك بنفسك واختر الخدمات المناسبة
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-7 text-triply-slate/75">
            اختر الوجهة والخدمات التي تحتاجها، وحدد ميزانيتك، ودعنا نخطط لك رحلة مثالية
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8 rounded-3xl border border-triply-mint/30 bg-white p-8 shadow-xl md:p-10">
          {/* اختيار الوجهة */}
          <div className="space-y-3">
            <label className="block text-lg font-semibold text-triply-dark">اختر الوجهة</label>
            <select
              value={selectedDestination}
              onChange={(e) => setSelectedDestination(e.target.value)}
              className="w-full rounded-xl border-2 border-triply-mint/40 bg-triply-sand/20 px-5 py-3.5 text-right text-base text-triply-dark shadow-sm transition focus:border-triply focus:bg-white focus:outline-none focus:ring-2 focus:ring-triply/10"
              required
            >
              <option value="">اختر المدينة...</option>
              {destinations.map((dest) => (
                <option key={dest} value={dest}>
                  {dest}
                </option>
              ))}
            </select>
          </div>

          {/* اختيار الخدمات */}
          <div className="space-y-4">
            <label className="block text-lg font-semibold text-triply-dark">اختر الخدمات المطلوبة</label>
            <p className="text-sm text-triply-slate/70">يمكنك اختيار خدمة واحدة أو أكثر</p>
            <div className="grid gap-3 sm:grid-cols-2">
              {services.map((service) => (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => toggleService(service.id)}
                  className={`flex items-center gap-3 rounded-xl border-2 p-4 text-right transition-all duration-200 ${
                    selectedServices.includes(service.id)
                      ? 'border-triply bg-triply/5 shadow-md scale-[1.02]'
                      : 'border-triply-mint/40 bg-triply-sand/10 hover:border-triply-teal hover:bg-triply-mint/10'
                  }`}
                >
                  <span className="text-2xl">{service.icon}</span>
                  <span className="flex-1 font-medium text-triply-dark">{service.name}</span>
                  {selectedServices.includes(service.id) && (
                    <span className="text-xl text-triply">✓</span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* اختيار الميزانية */}
          <div className="space-y-4">
            <label className="block text-lg font-semibold text-triply-dark">حدد مستوى الميزانية</label>
            <div className="grid gap-4 sm:grid-cols-3">
              {budgetLevels.map((budget) => (
                <button
                  key={budget.id}
                  type="button"
                  onClick={() => setSelectedBudget(budget.id)}
                  className={`rounded-xl border-2 p-5 text-center transition-all duration-200 ${
                    selectedBudget === budget.id
                      ? 'border-triply bg-triply/5 shadow-md scale-[1.03]'
                      : 'border-triply-mint/40 bg-triply-sand/10 hover:border-triply-teal hover:bg-triply-mint/10'
                  }`}
                >
                  <div className="mb-2 text-lg font-bold text-triply-dark">{budget.name}</div>
                  <div className="text-xs text-triply-slate/70">{budget.description}</div>
                  {selectedBudget === budget.id && (
                    <div className="mt-2 text-xl text-triply">✓</div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* زر الإرسال */}
          <div className="pt-4 text-center">
            <GlassButton
              type="submit"
              variant="primary"
              size="lg"
              disabled={!selectedDestination || selectedServices.length === 0 || !selectedBudget}
              className="w-full sm:w-auto"
            >
              احجز الآن واحصل على عرض سعر
            </GlassButton>
            <p className="mt-4 text-sm text-triply-slate/70">
              سيتم التواصل معك خلال 24 ساعة لتأكيد التفاصيل
            </p>
          </div>
        </form>

        {/* ملخص الاختيار */}
        {(selectedDestination || selectedServices.length > 0 || selectedBudget) && (
          <div className="mt-8 rounded-2xl border-2 border-triply-mint/30 bg-gradient-to-br from-triply-mint/5 to-triply-teal/5 p-6 shadow-md">
            <h3 className="mb-4 text-lg font-semibold text-triply-dark">ملخص اختيارك:</h3>
            <div className="space-y-2 text-base text-triply-slate">
              {selectedDestination && (
                <p>
                  <strong className="text-triply-dark">الوجهة:</strong> {selectedDestination}
                </p>
              )}
              {selectedServices.length > 0 && (
                <p>
                  <strong className="text-triply-dark">الخدمات:</strong>{' '}
                  {selectedServices.map((id) => services.find((s) => s.id === id)?.name).join(' + ')}
                </p>
              )}
              {selectedBudget && (
                <p>
                  <strong className="text-triply-dark">الميزانية:</strong> {budgetLevels.find((b) => b.id === selectedBudget)?.name}
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
