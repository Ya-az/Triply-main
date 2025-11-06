document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            document.getElementById('formMessage').textContent = "تم إرسال رسالتك بنجاح! سنرد عليك قريباً.";
            form.reset();
        });
    }
});