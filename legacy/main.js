// ====================
// Main Application Script (Legacy)
// ====================

// تحديد الصفحة الحالية تلقائياً
function getCurrentPage() {
    const path = window.location.pathname;
    const page = path.split('/').pop().replace('.html', '');
    return page || 'index';
}

// تهيئة الموقع عند التحميل
document.addEventListener('DOMContentLoaded', function() {
    // تحميل المكونات القابلة لإعادة الاستخدام
    const currentPage = getCurrentPage();
    if (typeof initComponents === 'function') {
      initComponents(currentPage);
    }
    
    // معالجة نموذج الاتصال
    initContactForm();
    
    // إضافة تأثيرات إضافية
    initAnimations();
});

// ====================
// Contact Form Handler (Reusable)
// ====================
function initContactForm() {
    var form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // جمع البيانات
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                message: document.getElementById('message').value
            };
            
            // عرض رسالة النجاح
            const messageDiv = document.getElementById('formMessage');
            messageDiv.textContent = `شكراً ${formData.name}! تم إرسال رسالتك بنجاح. سنرد عليك على ${formData.email} قريباً.`;
            messageDiv.style.color = 'var(--main-green)';
            messageDiv.style.padding = '1rem';
            messageDiv.style.background = 'rgba(141, 217, 207, 0.25)';
            messageDiv.style.borderRadius = '10px';
            messageDiv.style.marginTop = '1rem';
            
            // مسح النموذج
            form.reset();
            
            // إخفاء الرسالة بعد 5 ثواني
            setTimeout(() => {
                messageDiv.style.display = 'none';
            }, 5000);
        });
    }
}

// ====================
// Animations (Reusable)
// ====================
function initAnimations() {
    // إضافة تأثير Fade In للعناصر
    const elements = document.querySelectorAll('.service-card, .service, .about, .contact');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// ====================
// Utility Functions (Reusable)
// ====================

// تحديث معلومات المستخدم
function updateUserInfo(name, avatar) {
    if (window.SiteConfig) {
      SiteConfig.user.name = name;
      SiteConfig.user.avatar = avatar;
    }
    
    // إعادة تحميل الـ Header
    const currentPage = getCurrentPage();
    if (typeof initComponents === 'function') {
      initComponents(currentPage);
    }
}

// تحديث معلومات التواصل
function updateContactInfo(email, phone, address) {
    if (window.SiteConfig) {
      SiteConfig.contact.email = email;
      SiteConfig.contact.phone = phone;
      SiteConfig.contact.address = address;
    }
    
    // إعادة تحميل الـ Footer
    const footerContainer = document.getElementById('footer-container');
    if (footerContainer && typeof createFooter === 'function') {
        footerContainer.innerHTML = createFooter();
        if (typeof attachEventListeners === 'function') {
          attachEventListeners();
        }
    }
}

// دالة للتنقل السلس
function smoothScrollTo(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// ====================
// Export للاستخدام الخارجي
// ====================
window.AppUtils = {
    updateUserInfo,
    updateContactInfo,
    smoothScrollTo,
    getCurrentPage
};
