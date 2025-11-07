import { useEffect, useState } from 'react';
import { GlassButton } from '../ui/GlassButton.jsx';
import { FeedbackToast } from '../ui/FeedbackToast.jsx';
import { bookingServices, budgetLevels, bookingDestinations } from '../../data/bookingOptions.js';
import { formHelpers } from '../../data/formHelpers.js';
import { FormHelper } from '../ui/FormHelper.jsx';
import { BookingProgressIndicator } from '../BookingProgressIndicator.jsx';

const STORAGE_KEY = 'triply-booking-preferences';

function BookingSection() {
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedBudget, setSelectedBudget] = useState('');
  const [selectedDestination, setSelectedDestination] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const [hasSavedPreferences, setHasSavedPreferences] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) {
        return;
      }
      const parsed = JSON.parse(stored);
      if (parsed.destination) {
        setSelectedDestination(parsed.destination);
      }
      if (Array.isArray(parsed.services)) {
        setSelectedServices(parsed.services);
      }
      if (parsed.budget) {
        setSelectedBudget(parsed.budget);
      }
      setHasSavedPreferences(true);
      setFeedback({ message: 'تم استرجاع تفضيلات الحجز المحفوظة', variant: 'info' });
    } catch (error) {
      console.error('Failed to restore booking preferences', error);
    }
  }, []);

  useEffect(() => {
    const snapshot = {
      destination: selectedDestination,
      services: selectedServices,
      budget: selectedBudget
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(snapshot));
    if (selectedDestination || selectedServices.length > 0 || selectedBudget) {
      setHasSavedPreferences(true);
    }

    // Update progress step based on form completion
    if (selectedDestination) {
      setCurrentStep(2);
      if ((selectedServices.length > 0 || selectedBudget)) {
        setCurrentStep(3);
      }
    } else {
      setCurrentStep(1);
    }
  }, [selectedDestination, selectedServices, selectedBudget]);

  const toggleService = (serviceId) => {
    setSelectedServices((prev) =>
      prev.includes(serviceId) ? prev.filter((id) => id !== serviceId) : [...prev, serviceId]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFeedback(null);

    window.setTimeout(() => {
      setIsSubmitting(false);
      setFeedback({
        message: `تم استلام طلب الحجز لرحلتك إلى ${selectedDestination} وسنتواصل معك خلال ساعات`,
        variant: 'success'
      });
    }, 1200);
  };

  const handleSavePreferences = () => {
    const snapshot = {
      destination: selectedDestination,
      services: selectedServices,
      budget: selectedBudget
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(snapshot));
    setHasSavedPreferences(true);
    setFeedback({ message: 'تم حفظ اختيارك، يمكنك استرجاعه لاحقاً', variant: 'success' });
  };

  const handleRestorePreferences = () => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) {
        setFeedback({ message: 'لا توجد اختيارات محفوظة للاسترجاع حالياً', variant: 'info' });
        return;
      }
      const parsed = JSON.parse(stored);
      setSelectedDestination(parsed.destination ?? '');
      setSelectedServices(Array.isArray(parsed.services) ? parsed.services : []);
      setSelectedBudget(parsed.budget ?? '');
      setFeedback({ message: 'تم تطبيق آخر اختياراتك المحفوظة', variant: 'success' });
    } catch (error) {
      console.error('Failed to restore booking preferences', error);
      setFeedback({ message: 'حدث خطأ أثناء استرجاع البيانات', variant: 'error' });
    }
  };

  return (
    <section id="booking" className="section-padding bg-gradient-to-b from-white via-triply-sand/30 to-white dark:from-dark-bg dark:via-dark-surface/50 dark:to-dark-bg">
      <div className="mx-auto max-w-4xl px-6 text-right">
        <div className="mb-10 space-y-3 text-center">
          <span className="inline-block rounded-full bg-triply-mint/20 dark:bg-triply-teal/20 px-4 py-1 text-sm font-medium text-triply dark:text-triply-mint">
            احجز رحلتك المخصصة
          </span>
          <h2 className="font-display text-3xl text-triply-dark dark:text-dark-text-primary md:text-4xl">
            صمم رحلتك بنفسك واختر الخدمات المناسبة
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-7 text-triply-slate/75 dark:text-dark-text-secondary">
            اختر الوجهة والخدمات التي تحتاجها، وحدد ميزانيتك، ودعنا نخطط لك رحلة مثالية
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            <GlassButton
              type="button"
              variant="secondary"
              size="sm"
              onClick={handleSavePreferences}
              disabled={!selectedDestination && selectedServices.length === 0 && !selectedBudget}
            >
              💾 حفظ اختياراتي
            </GlassButton>
            <GlassButton
              type="button"
              variant="accent"
              size="sm"
              onClick={handleRestorePreferences}
              disabled={!hasSavedPreferences}
            >
              ↻ استرجاع الاختيار المحفوظ
            </GlassButton>
          </div>

          {/* Progress Indicator */}
          <BookingProgressIndicator currentStep={currentStep} />
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-8 rounded-3xl border border-triply-mint/30 dark:border-dark-border/50 bg-white dark:bg-dark-elevated/60 p-8 shadow-xl dark:shadow-ambient-dark md:p-10"
        >
          <FeedbackToast
            message={feedback?.message}
            variant={feedback?.variant}
            className="mb-4"
            onDismiss={() => setFeedback(null)}
          />
          {/* اختيار الوجهة */}
          <div className="space-y-3">
            <label className="block text-lg font-semibold text-triply-dark dark:text-dark-text-primary">
              {formHelpers.booking.destination.label}
            </label>
            <select
              value={selectedDestination}
              onChange={(e) => setSelectedDestination(e.target.value)}
              className="w-full rounded-xl border-2 border-triply-mint/40 dark:border-dark-border/50 bg-triply-sand/20 dark:bg-dark-surface/60 px-5 py-3.5 text-right text-base text-triply-dark dark:text-dark-text-primary shadow-sm transition focus:border-triply dark:focus:border-triply-mint focus:bg-white dark:focus:bg-dark-elevated focus:outline-none focus:ring-2 focus:ring-triply/10 dark:focus:ring-triply-mint/20"
              required
            >
              <option value="">{formHelpers.booking.destination.placeholder}</option>
              {bookingDestinations.map((dest) => (
                <option key={dest} value={dest}>
                  {dest}
                </option>
              ))}
            </select>
            <FormHelper text={formHelpers.booking.destination.helper} />
          </div>

          {/* اختيار الخدمات */}
          <div className="space-y-4">
            <label className="block text-lg font-semibold text-triply-dark dark:text-dark-text-primary">
              {formHelpers.booking.services.label}
            </label>
            <FormHelper text={formHelpers.booking.services.helper} />
            <div className="grid gap-3 sm:grid-cols-2">
              {bookingServices.map((service) => (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => toggleService(service.id)}
                  className={`flex items-center gap-3 rounded-xl border-2 p-4 text-right transition-all duration-200 ${
                    selectedServices.includes(service.id)
                      ? 'border-triply dark:border-triply-mint bg-triply/5 dark:bg-triply-mint/10 shadow-md scale-[1.02]'
                      : 'border-triply-mint/40 dark:border-dark-border/50 bg-triply-sand/10 dark:bg-dark-surface/40 hover:border-triply-teal dark:hover:border-triply-teal hover:bg-triply-mint/10 dark:hover:bg-dark-elevated/60'
                  }`}
                >
                  <span className="text-2xl">{service.icon}</span>
                  <span className="flex-1 font-medium text-triply-dark dark:text-dark-text-primary">{service.name}</span>
                  {selectedServices.includes(service.id) && (
                    <span className="text-xl text-triply">✓</span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* اختيار الميزانية */}
          <div className="space-y-4">
            <label className="block text-lg font-semibold text-triply-dark dark:text-dark-text-primary">
              {formHelpers.booking.budget.label}
            </label>
            <FormHelper text={formHelpers.booking.budget.helper} />
            <div className="grid gap-4 sm:grid-cols-3">
              {budgetLevels.map((budget) => (
                <button
                  key={budget.id}
                  type="button"
                  onClick={() => setSelectedBudget(budget.id)}
                  className={`rounded-xl border-2 p-5 text-center transition-all duration-200 ${
                    selectedBudget === budget.id
                      ? 'border-triply dark:border-triply-mint bg-triply/5 dark:bg-triply-mint/10 shadow-md scale-[1.03]'
                      : 'border-triply-mint/40 dark:border-dark-border/50 bg-triply-sand/10 dark:bg-dark-surface/40 hover:border-triply-teal dark:hover:border-triply-teal hover:bg-triply-mint/10 dark:hover:bg-dark-elevated/60'
                  }`}
                >
                  <div className="mb-2 text-lg font-bold text-triply-dark dark:text-dark-text-primary">{budget.name}</div>
                  <div className="text-xs text-triply-slate/70 dark:text-dark-text-secondary">{budget.description}</div>
                  {selectedBudget === budget.id && (
                    <div className="mt-2 text-xl text-triply dark:text-triply-mint">✓</div>
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
              isLoading={isSubmitting}
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
                  {selectedServices.map((id) => bookingServices.find((s) => s.id === id)?.name).join(' + ')}
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

export { BookingSection };
