import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthLayout } from '../../layouts/AuthLayout.jsx';
import { InputField } from '../../components/ui/InputField.jsx';
import { GoogleButton } from '../../components/ui/GoogleButton.jsx';
import { GlassButton } from '../../components/ui/GlassButton.jsx';

export function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false
  });
  const [errors, setErrors] = useState({});

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
      return;
    }

    // Simulate login - in real app, this would call an API
    console.log('Login data:', formData);
    
    // Extract username from email
    const username = formData.email.split('@')[0];
    
    // Save to localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('userEmail', formData.email);
    localStorage.setItem('isLoggedIn', 'true');
    
    // Show success message
    alert(`مرحباً ${username}! تم تسجيل الدخول بنجاح`);
    
    // Redirect to home page
    navigate('/');
  };

  const handleGoogleLogin = () => {
    console.log('Google login clicked');
    // TODO: Google OAuth integration
    
    // Simulate Google login
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
          <h1 className="mb-2 font-display text-3xl font-bold text-white">مرحباً بعودتك</h1>
          <p className="text-white/70">سجل الدخول إلى حسابك في Triply</p>
        </div>

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

          {/* Remember me & Forgot password */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-white/80">
              <input
                type="checkbox"
                name="remember"
                checked={formData.remember}
                onChange={handleChange}
                className="h-4 w-4 rounded border-white/30 bg-white/10 text-triply focus:ring-2 focus:ring-white/20"
              />
              تذكرني
            </label>
            <a href="#" className="text-triply-mint hover:text-white transition-colors">
              نسيت كلمة المرور؟
            </a>
          </div>

          {/* Submit button */}
          <GlassButton type="submit" variant="primary" className="w-full" size="lg">
            تسجيل الدخول
          </GlassButton>
        </form>

        {/* Divider */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/20" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-transparent px-4 text-white/60">أو تابع باستخدام</span>
          </div>
        </div>

        {/* Google login */}
        <GoogleButton label="تسجيل الدخول باستخدام Google" onClick={handleGoogleLogin} />

        {/* Sign up link */}
        <p className="text-center text-sm text-white/70">
          ليس لديك حساب؟{' '}
          <Link to="/signup" className="font-medium text-triply-mint hover:text-white transition-colors">
            أنشئ حساباً جديداً
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
}
