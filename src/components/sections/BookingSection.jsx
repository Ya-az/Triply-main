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
    <section id="booking" className="section-padding relative overflow-hidden bg-gradient-to-b from-triply-sand/20 via-white to-triply-mint/10 dark:from-dark-bg dark:via-dark-surface/50 dark:to-dark-elevated">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20 pointer-events-none" aria-hidden="true">
        <div className="absolute top-20 right-10 h-64 w-64 rounded-full bg-triply-mint/30 dark:bg-triply-teal/20 blur-3xl" />
        <div className="absolute bottom-20 left-10 h-80 w-80 rounded-full bg-triply-accent/20 dark:bg-triply-mint/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 text-right">
        <div className="mb-12 space-y-4 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-triply-mint to-triply-teal dark:from-triply-teal dark:to-triply-mint px-5 py-2 text-sm font-semibold text-white shadow-lg">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
            </svg>
            احجز رحلتك المخصصة
          </span>
          <h2 className="font-display text-3xl sm:text-4xl text-triply-dark dark:text-dark-text-primary md:text-5xl leading-tight">
            صمم رحلتك بنفسك <span className="text-transparent bg-clip-text bg-gradient-to-l from-triply via-triply-teal to-triply-mint">واختر الخدمات المناسبة</span>
          </h2>
          <p className="mx-auto max-w-2xl text-sm sm:text-base leading-7 text-triply-slate/75 dark:text-dark-text-secondary">
            اختر الوجهة والخدمات التي تحتاجها، وحدد ميزانيتك، ودعنا نخطط لك رحلة مثالية تناسب احتياجاتك
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            <GlassButton
              type="button"
              variant="secondary"
              size="sm"
              onClick={handleSavePreferences}
              disabled={!selectedDestination && selectedServices.length === 0 && !selectedBudget}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M7.707 10.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V6h5a2 2 0 012 2v7a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h5v5.586l-1.293-1.293zM9 4a1 1 0 012 0v2H9V4z" />
              </svg>
              حفظ اختياراتي
            </GlassButton>
            <GlassButton
              type="button"
              variant="accent"
              size="sm"
              onClick={handleRestorePreferences}
              disabled={!hasSavedPreferences}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
              </svg>
              استرجاع الاختيار
            </GlassButton>
          </div>

          {/* Progress Indicator */}
          <BookingProgressIndicator currentStep={currentStep} />
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-8 rounded-3xl border-2 border-triply-mint/40 dark:border-dark-border/50 bg-white/95 dark:bg-dark-elevated/80 backdrop-blur-xl p-6 sm:p-8 md:p-10 shadow-2xl hover:shadow-3xl transition-shadow duration-300"
        >
          <FeedbackToast
            message={feedback?.message}
            variant={feedback?.variant}
            className="mb-4"
            onDismiss={() => setFeedback(null)}
          />
          {/* اختيار الوجهة */}
          <div className="space-y-4">
            <label className="flex items-center gap-2 text-lg font-bold text-triply-dark dark:text-dark-text-primary">
              <svg className="w-6 h-6 text-triply dark:text-triply-mint" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              {formHelpers.booking.destination.label}
            </label>
            <select
              value={selectedDestination}
              onChange={(e) => setSelectedDestination(e.target.value)}
              className="w-full rounded-xl border-2 border-triply-mint/40 dark:border-dark-border/50 bg-gradient-to-br from-triply-sand/10 to-white dark:from-dark-surface/40 dark:to-dark-elevated/60 px-5 py-4 text-right text-base text-triply-dark dark:text-dark-text-primary shadow-md transition-all duration-200 hover:border-triply dark:hover:border-triply-mint focus:border-triply dark:focus:border-triply-mint focus:bg-white dark:focus:bg-dark-elevated focus:outline-none focus:ring-4 focus:ring-triply/10 dark:focus:ring-triply-mint/20 focus:scale-[1.01]"
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
            <label className="flex items-center gap-2 text-lg font-bold text-triply-dark dark:text-dark-text-primary">
              <svg className="w-6 h-6 text-triply dark:text-triply-mint" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
              </svg>
              {formHelpers.booking.services.label}
            </label>
            <FormHelper text={formHelpers.booking.services.helper} />
            <div className="grid gap-3 sm:grid-cols-2">
              {bookingServices.map((service) => (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => toggleService(service.id)}
                  className={`group relative flex items-center gap-3 rounded-xl border-2 p-4 text-right transition-all duration-300 overflow-hidden ${
                    selectedServices.includes(service.id)
                      ? 'border-triply dark:border-triply-mint bg-gradient-to-br from-triply/10 via-triply-mint/10 to-triply-teal/10 dark:from-triply-mint/20 dark:via-triply-teal/10 dark:to-triply/10 shadow-lg scale-[1.03]'
                      : 'border-triply-mint/40 dark:border-dark-border/50 bg-gradient-to-br from-triply-sand/5 to-white dark:from-dark-surface/30 dark:to-dark-elevated/40 hover:border-triply dark:hover:border-triply-teal hover:shadow-md hover:scale-[1.02]'
                  }`}
                >
                  {/* Shine effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                  
                  <span className="text-2xl relative z-10">{service.icon}</span>
                  <span className="flex-1 font-semibold text-triply-dark dark:text-dark-text-primary relative z-10">{service.name}</span>
                  {selectedServices.includes(service.id) && (
                    <span className="text-xl text-triply dark:text-triply-mint relative z-10 animate-bounce">✓</span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* اختيار الميزانية */}
          <div className="space-y-4">
            <label className="flex items-center gap-2 text-lg font-bold text-triply-dark dark:text-dark-text-primary">
              <svg className="w-6 h-6 text-triply dark:text-triply-mint" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
              </svg>
              {formHelpers.booking.budget.label}
            </label>
            <FormHelper text={formHelpers.booking.budget.helper} />
            <div className="grid gap-4 sm:grid-cols-3">
              {budgetLevels.map((budget) => (
                <button
                  key={budget.id}
                  type="button"
                  onClick={() => setSelectedBudget(budget.id)}
                  className={`group relative rounded-xl border-2 p-6 text-center transition-all duration-300 overflow-hidden ${
                    selectedBudget === budget.id
                      ? 'border-triply dark:border-triply-mint bg-gradient-to-br from-triply/10 to-triply-mint/10 dark:from-triply-mint/20 dark:to-triply-teal/10 shadow-xl scale-[1.05]'
                      : 'border-triply-mint/40 dark:border-dark-border/50 bg-gradient-to-br from-triply-sand/5 to-white dark:from-dark-surface/30 dark:to-dark-elevated/40 hover:border-triply dark:hover:border-triply-teal hover:shadow-lg hover:scale-[1.03]'
                  }`}
                >
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                  
                  <div className="relative z-10 mb-3 text-xl font-bold text-triply-dark dark:text-dark-text-primary">{budget.name}</div>
                  <div className="relative z-10 text-xs leading-relaxed text-triply-slate/70 dark:text-dark-text-secondary">{budget.description}</div>
                  {selectedBudget === budget.id && (
                    <div className="relative z-10 mt-3 text-2xl text-triply dark:text-triply-mint animate-bounce">✓</div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* زر الإرسال */}
          <div className="pt-6 text-center space-y-4">
            <GlassButton
              type="submit"
              variant="primary"
              size="lg"
              disabled={!selectedDestination || selectedServices.length === 0 || !selectedBudget}
              isLoading={isSubmitting}
              className="w-full sm:w-auto shadow-xl hover:shadow-2xl"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
              احجز الآن واحصل على عرض سعر
            </GlassButton>
            <p className="flex items-center justify-center gap-2 text-xs sm:text-sm text-triply-slate/70 dark:text-dark-text-secondary">
              <svg className="w-4 h-4 text-triply-mint" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              سيتم التواصل معك خلال 24 ساعة لتأكيد التفاصيل
            </p>
          </div>
        </form>

        {/* ملخص الاختيار */}
        {(selectedDestination || selectedServices.length > 0 || selectedBudget) && (
          <div className="mt-8 rounded-2xl border-2 border-triply/30 dark:border-triply-mint/40 bg-gradient-to-br from-triply-sand/40 via-triply-mint/10 to-white dark:from-triply-teal/20 dark:via-dark-elevated/80 dark:to-dark-surface/60 backdrop-blur-sm p-6 sm:p-8 shadow-xl">
            <div className="flex items-center gap-3 mb-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-triply to-triply-teal dark:from-triply-mint dark:to-triply-teal shadow-lg">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-triply-dark dark:text-dark-text-primary">ملخص اختيارك</h3>
            </div>
            <div className="space-y-3 text-sm sm:text-base">
              {selectedDestination && (
                <div className="flex items-start gap-3 p-3 sm:p-4 rounded-xl bg-white dark:bg-dark-elevated border-2 border-triply-mint/40 dark:border-dark-border/40 shadow-sm hover:shadow-md transition-shadow">
                  <svg className="w-5 h-5 text-triply dark:text-triply-mint flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <strong className="text-triply-dark dark:text-dark-text-primary">الوجهة:</strong>
                    <span className="mr-2 font-semibold text-triply dark:text-triply-mint">{selectedDestination}</span>
                  </div>
                </div>
              )}
              {selectedServices.length > 0 && (
                <div className="flex items-start gap-3 p-3 sm:p-4 rounded-xl bg-white dark:bg-dark-elevated border-2 border-triply-mint/40 dark:border-dark-border/40 shadow-sm hover:shadow-md transition-shadow">
                  <svg className="w-5 h-5 text-triply dark:text-triply-mint flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <strong className="text-triply-dark dark:text-dark-text-primary">الخدمات:</strong>
                    <span className="mr-2 font-semibold text-triply dark:text-triply-mint">
                      {selectedServices.map((id) => bookingServices.find((s) => s.id === id)?.name).join(' • ')}
                    </span>
                  </div>
                </div>
              )}
              {selectedBudget && (
                <div className="flex items-start gap-3 p-3 sm:p-4 rounded-xl bg-white dark:bg-dark-elevated border-2 border-triply-mint/40 dark:border-dark-border/40 shadow-sm hover:shadow-md transition-shadow">
                  <svg className="w-5 h-5 text-triply dark:text-triply-mint flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <strong className="text-triply-dark dark:text-dark-text-primary">الميزانية:</strong>
                    <span className="mr-2 font-semibold text-triply dark:text-triply-mint">{budgetLevels.find((b) => b.id === selectedBudget)?.name}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export { BookingSection };
