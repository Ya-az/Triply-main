import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthLayout } from '../../layouts/AuthLayout.jsx';
import { InputField } from '../../components/ui/InputField.jsx';
import { GoogleButton } from '../../components/ui/GoogleButton.jsx';
import { GlassButton } from '../../components/ui/GlassButton.jsx';
import { FeedbackToast } from '../../components/ui/FeedbackToast.jsx';

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'البريد الإلكتروني مطلوب';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'البريد الإلكتروني غير صالح';
    }
    
    if (!formData.password) {
      newErrors.password = 'كلمة المرور مطلوبة';
    } else if (formData.password.length < 6) {
      newErrors.password = 'كلمة المرور يجب أن تكون 6 أحرف على الأقل';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setStatus({ type: 'error', message: 'تحقق من الحقول المطلوبة لإكمال تسجيل الدخول' });
      return;
    }

    setIsSubmitting(true);
    setStatus(null);

    window.setTimeout(() => {
      const username = formData.email.split('@')[0];
      localStorage.setItem('username', username);
      localStorage.setItem('userEmail', formData.email);
      localStorage.setItem('isLoggedIn', 'true');
      setIsSubmitting(false);
      setStatus({ type: 'success', message: `مرحباً ${username}! تم تسجيل الدخول بنجاح.` });
      window.setTimeout(() => {
        navigate('/');
      }, 600);
    }, 1200);
  };

  const handleGoogleLogin = () => {
    // Google OAuth integration placeholder
    setIsSubmitting(true);
    setStatus(null);

    window.setTimeout(() => {
      const username = 'مستخدم Google';
      localStorage.setItem('username', username);
      localStorage.setItem('isLoggedIn', 'true');
      setIsSubmitting(false);
      setStatus({ type: 'success', message: 'تم تسجيل الدخول عبر Google بنجاح.' });
      window.setTimeout(() => {
        navigate('/');
      }, 600);
    }, 1000);
  };

  return (
    <AuthLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="text-center">
          <h1 className="mb-2 font-display text-3xl font-bold text-triply-dark dark:text-dark-text-primary">مرحباً بعودتك</h1>
          <p className="text-triply-slate/70 dark:text-dark-text-secondary">سجل الدخول إلى حسابك في Triply</p>
        </div>

        <FeedbackToast
          message={status?.message}
          variant={status?.type === 'error' ? 'error' : 'success'}
          onDismiss={() => setStatus(null)}
        />

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <InputField
              label="البريد الإلكتروني"
              type="email"
              name="email"
              placeholder="name@example.com"
              value={formData.email}
              onChange={handleChange}
              required
              error={errors.email}
              icon={
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              }
            />
          </div>

          <div>
            <InputField
              label="كلمة المرور"
              type="password"
              name="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              required
              error={errors.password}
              icon={
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              }
            />
          </div>

          {/* Remember me & Forgot password */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-triply-slate dark:text-dark-text-secondary">
              <input
                type="checkbox"
                name="remember"
                checked={formData.remember}
                onChange={handleChange}
                className="h-4 w-4 rounded border-2 border-triply-mint/40 dark:border-dark-border/50 bg-white dark:bg-dark-surface/50 text-triply dark:text-triply-mint focus:ring-2 focus:ring-triply/30 dark:focus:ring-triply-mint/30"
              />
              تذكرني
            </label>
            <a href="#" className="text-triply hover:text-triply-teal dark:text-triply-mint dark:hover:text-triply-accentLight transition-colors">
              نسيت كلمة المرور؟
            </a>
          </div>

          {/* Submit button */}
          <GlassButton type="submit" variant="primary" className="w-full" size="lg" isLoading={isSubmitting}>
            تسجيل الدخول
          </GlassButton>
        </form>

        {/* Divider */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-triply-mint/30 dark:border-dark-border/30" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-white dark:bg-dark-elevated px-4 text-triply-slate/60 dark:text-dark-text-secondary">أو تابع باستخدام</span>
          </div>
        </div>

        {/* Google login */}
  <GoogleButton label="تسجيل الدخول باستخدام Google" onClick={handleGoogleLogin} disabled={isSubmitting} />

        {/* Sign up link */}
        <p className="text-center text-sm text-triply-slate/70 dark:text-dark-text-secondary">
          ليس لديك حساب؟{' '}
          <Link to="/signup" className="font-medium text-triply dark:text-triply-mint hover:text-triply-teal dark:hover:text-triply-accentLight transition-colors">
            أنشئ حساباً جديداً
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
}

export { Login };
