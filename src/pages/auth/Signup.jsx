import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthLayout } from '../../layouts/AuthLayout.jsx';
import { InputField } from '../../components/ui/InputField.jsx';
import { GoogleButton } from '../../components/ui/GoogleButton.jsx';
import { GlassButton } from '../../components/ui/GlassButton.jsx';

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName) {
      newErrors.fullName = 'الاسم الكامل مطلوب';
    } else if (formData.fullName.length < 3) {
      newErrors.fullName = 'الاسم يجب أن يكون 3 أحرف على الأقل';
    }
    
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
    
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'تأكيد كلمة المرور مطلوب';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'كلمات المرور غير متطابقة';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    // Simulate signup - in real app, this would call an API
    // Save to localStorage
    localStorage.setItem('username', formData.fullName);
    localStorage.setItem('userEmail', formData.email);
    localStorage.setItem('isLoggedIn', 'true');
    
    // Show success message
    alert(`مرحباً ${formData.fullName}! تم إنشاء حسابك بنجاح`);
    
    // Redirect to home page
    navigate('/');
  };

  const handleGoogleSignup = () => {
    // Google OAuth integration placeholder
    // Simulate Google signup
    const username = 'مستخدم Google';
    localStorage.setItem('username', username);
    localStorage.setItem('isLoggedIn', 'true');
    navigate('/');
  };

  return (
    <AuthLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="text-center">
          <h1 className="mb-2 font-display text-3xl font-bold text-white">أنشئ حساب Triply</h1>
          <p className="text-white/70">ابدأ رحلتك معنا اليوم</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <InputField
              label="الاسم الكامل"
              type="text"
              name="fullName"
              placeholder="أحمد محمد"
              value={formData.fullName}
              onChange={handleChange}
              required
              icon={
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              }
            />
            {errors.fullName && (
              <p className="mt-1 text-sm text-red-300">{errors.fullName}</p>
            )}
          </div>

          <div>
            <InputField
              label="البريد الإلكتروني"
              type="email"
              name="email"
              placeholder="name@example.com"
              value={formData.email}
              onChange={handleChange}
              required
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
            {errors.email && (
              <p className="mt-1 text-sm text-red-300">{errors.email}</p>
            )}
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
            {errors.password && (
              <p className="mt-1 text-sm text-red-300">{errors.password}</p>
            )}
          </div>

          <div>
            <InputField
              label="تأكيد كلمة المرور"
              type="password"
              name="confirmPassword"
              placeholder="••••••••"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              icon={
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              }
            />
            {errors.confirmPassword && (
              <p className="mt-1 text-sm text-red-300">{errors.confirmPassword}</p>
            )}
          </div>

          {/* Submit button */}
          <GlassButton type="submit" variant="primary" className="w-full" size="lg">
            إنشاء الحساب
          </GlassButton>
        </form>

        {/* Divider */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/20" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-transparent px-4 text-white/60">أو سجل باستخدام</span>
          </div>
        </div>

        {/* Google signup */}
        <GoogleButton label="التسجيل باستخدام Google" onClick={handleGoogleSignup} />

        {/* Login link */}
        <p className="text-center text-sm text-white/70">
          لديك حساب بالفعل؟{' '}
          <Link to="/login" className="font-medium text-triply-mint hover:text-white transition-colors">
            سجل الدخول
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
}

export { Signup };
