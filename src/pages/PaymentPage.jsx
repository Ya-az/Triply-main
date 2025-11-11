import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FeedbackToast } from '../components/ui/FeedbackToast';

function PaymentPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const bookingData = location.state;

  const [paymentMethod, setPaymentMethod] = useState('credit-card');
  const [isProcessing, setIsProcessing] = useState(false);
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  const [formData, setFormData] = useState({
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: ''
  });

  if (!bookingData) {
    navigate('/');
    return null;
  }

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: '', type: 'success' }), 5000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    // تنسيق رقم البطاقة
    if (name === 'cardNumber') {
      const cleaned = value.replace(/\s/g, '');
      const formatted = cleaned.match(/.{1,4}/g)?.join(' ') || cleaned;
      setFormData(prev => ({ ...prev, [name]: formatted }));
      return;
    }
    
    // تنسيق تاريخ الانتهاء
    if (name === 'expiryDate') {
      const cleaned = value.replace(/\D/g, '');
      const formatted = cleaned.length >= 2 ? `${cleaned.slice(0, 2)}/${cleaned.slice(2, 4)}` : cleaned;
      setFormData(prev => ({ ...prev, [name]: formatted }));
      return;
    }
    
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePayment = (e) => {
    e.preventDefault();
    
    // التحقق من البيانات
    if (paymentMethod === 'credit-card') {
      if (!formData.cardNumber || !formData.cardName || !formData.expiryDate || !formData.cvv) {
        showToast('الرجاء تعبئة جميع الحقول المطلوبة', 'error');
        return;
      }
    }
    
    setIsProcessing(true);

    // محاكاة عملية الدفع
    setTimeout(() => {
      setIsProcessing(false);
      showToast('تم الدفع بنجاح! جاري تحويلك...', 'success');
      
      setTimeout(() => {
        navigate('/payment-success', { state: bookingData });
      }, 2000);
    }, 2500);
  };

  const paymentMethods = [
    { id: 'credit-card', name: 'بطاقة ائتمان', icon: '💳' },
    { id: 'mada', name: 'مدى', icon: '🏦' },
    { id: 'apple-pay', name: 'Apple Pay', icon: '🍎' },
    { id: 'stc-pay', name: 'STC Pay', icon: '📱' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-triply-mint/20 via-white to-triply-teal/20 dark:from-dark-bg dark:via-dark-surface dark:to-dark-bg py-20 px-4">
      <div className="mx-auto max-w-4xl">
        {/* عنوان الصفحة */}
        <div className="text-center mb-8 animate-fadeIn">
          <h1 className="text-3xl md:text-4xl font-bold text-triply-dark dark:text-dark-text-primary mb-2">
            إتمام عملية الدفع 💳
          </h1>
          <p className="text-triply-dark/70 dark:text-dark-text-secondary">
            أدخل معلومات الدفع لتأكيد حجزك
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* ملخص الحجز */}
          <div className="md:col-span-1 animate-fadeInRight">
            <div className="bg-white dark:bg-dark-surface rounded-2xl shadow-lg p-6 border border-triply-mint/30 dark:border-dark-border sticky top-24">
              <h2 className="text-xl font-bold text-triply-dark dark:text-dark-text-primary mb-4">
                ملخص الحجز 📋
              </h2>
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-triply-dark/70 dark:text-dark-text-secondary">الوجهة:</span>
                  <span className="font-semibold text-triply-dark dark:text-dark-text-primary">
                    {bookingData.destination}
                  </span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-triply-dark/70 dark:text-dark-text-secondary">الفئة:</span>
                  <span className="font-semibold text-triply-dark dark:text-dark-text-primary">
                    {bookingData.category}
                  </span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-triply-dark/70 dark:text-dark-text-secondary">عدد الأيام:</span>
                  <span className="font-semibold text-triply-dark dark:text-dark-text-primary">
                    {bookingData.days} يوم
                  </span>
                </div>

                <div className="border-t border-triply-mint/30 dark:border-dark-border pt-3 mt-3">
                  <div className="flex justify-between text-lg font-bold">
                    <span className="text-triply-dark dark:text-dark-text-primary">الإجمالي:</span>
                    <span className="text-triply-teal dark:text-triply-mint">
                      {bookingData.totalCost?.toLocaleString() || '0'} ر.س
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* نموذج الدفع */}
          <div className="md:col-span-2 animate-fadeInLeft">
            <form onSubmit={handlePayment} className="bg-white dark:bg-dark-surface rounded-2xl shadow-lg p-6 md:p-8 border border-triply-mint/30 dark:border-dark-border">
              {/* اختيار طريقة الدفع */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-triply-dark dark:text-dark-text-primary mb-4">
                  اختر طريقة الدفع
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {paymentMethods.map((method) => (
                    <button
                      key={method.id}
                      type="button"
                      onClick={() => setPaymentMethod(method.id)}
                      className={`p-4 rounded-xl border-2 transition-all ${
                        paymentMethod === method.id
                          ? 'border-triply-teal bg-triply-mint/10 dark:bg-triply-teal/10 shadow-md'
                          : 'border-gray-200 dark:border-dark-border hover:border-triply-mint'
                      }`}
                    >
                      <div className="text-2xl mb-1">{method.icon}</div>
                      <div className="text-sm font-semibold text-triply-dark dark:text-dark-text-primary">
                        {method.name}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* معلومات البطاقة */}
              {paymentMethod === 'credit-card' && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-triply-dark dark:text-dark-text-primary mb-2">
                      رقم البطاقة *
                    </label>
                    <input
                      type="text"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      placeholder="1234 5678 9012 3456"
                      maxLength="19"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-dark-border bg-white dark:bg-dark-bg text-triply-dark dark:text-dark-text-primary focus:border-triply-teal focus:ring-2 focus:ring-triply-mint/20 outline-none transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-triply-dark dark:text-dark-text-primary mb-2">
                      اسم حامل البطاقة *
                    </label>
                    <input
                      type="text"
                      name="cardName"
                      value={formData.cardName}
                      onChange={handleInputChange}
                      placeholder="الاسم كما هو مكتوب على البطاقة"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-dark-border bg-white dark:bg-dark-bg text-triply-dark dark:text-dark-text-primary focus:border-triply-teal focus:ring-2 focus:ring-triply-mint/20 outline-none transition"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-triply-dark dark:text-dark-text-primary mb-2">
                        تاريخ الانتهاء *
                      </label>
                      <input
                        type="text"
                        name="expiryDate"
                        value={formData.expiryDate}
                        onChange={handleInputChange}
                        placeholder="MM/YY"
                        maxLength="5"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-dark-border bg-white dark:bg-dark-bg text-triply-dark dark:text-dark-text-primary focus:border-triply-teal focus:ring-2 focus:ring-triply-mint/20 outline-none transition"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-triply-dark dark:text-dark-text-primary mb-2">
                        CVV *
                      </label>
                      <input
                        type="text"
                        name="cvv"
                        value={formData.cvv}
                        onChange={handleInputChange}
                        placeholder="123"
                        maxLength="3"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-dark-border bg-white dark:bg-dark-bg text-triply-dark dark:text-dark-text-primary focus:border-triply-teal focus:ring-2 focus:ring-triply-mint/20 outline-none transition"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* رسالة لطرق الدفع الأخرى */}
              {paymentMethod !== 'credit-card' && (
                <div className="p-6 bg-triply-mint/10 dark:bg-triply-teal/10 rounded-xl text-center">
                  <p className="text-triply-dark dark:text-dark-text-primary font-semibold mb-2">
                    ستتم إعادة توجيهك إلى {paymentMethods.find(m => m.id === paymentMethod)?.name}
                  </p>
                  <p className="text-sm text-triply-dark/70 dark:text-dark-text-secondary">
                    اضغط على زر الدفع للمتابعة
                  </p>
                </div>
              )}

              {/* زر الدفع */}
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full mt-6 px-6 py-4 bg-gradient-to-r from-triply-teal to-triply-mint text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isProcessing ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>جاري معالجة الدفع...</span>
                  </div>
                ) : (
                  `ادفع ${bookingData.totalCost?.toLocaleString() || '0'} ر.س`
                )}
              </button>

              {/* أمان الدفع */}
              <div className="mt-6 flex items-center justify-center gap-2 text-sm text-triply-dark/60 dark:text-dark-text-secondary">
                <span>🔒</span>
                <span>معاملة آمنة ومشفرة بتقنية SSL</span>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Toast للإشعارات */}
      {toast.show && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-[60] w-full max-w-md px-4 animate-slide-down">
          <FeedbackToast
            message={toast.message}
            variant={toast.type}
            onDismiss={() => setToast({ show: false, message: '', type: 'success' })}
          />
        </div>
      )}
    </div>
  );
}

export default PaymentPage;
