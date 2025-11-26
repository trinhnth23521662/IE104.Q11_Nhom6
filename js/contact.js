<!-- Xử lý biểu mẫu liên hệ -->
    document.addEventListener('DOMContentLoaded', function() {
        const contactForm = document.querySelector('.contact-form');
        const successPopup = document.getElementById('successPopup');
        
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault(); // Ngăn form gửi đi mặc định
                
                // Lấy giá trị từ các trường input
                const fullname = document.getElementById('fullname').value.trim();
                const email = document.getElementById('email').value.trim();
                const reason = document.getElementById('reason').value;
                const topic = document.getElementById('topic').value.trim();
                const message = document.getElementById('message').value.trim();
                
                // Kiểm tra các trường bắt buộc
                if (!fullname || !email || !reason || !topic || !message) {
                    alert('Vui lòng điền đầy đủ thông tin bắt buộc!');
                    return;
                }
                
                // Hiển thị popup thông báo thành công
                successPopup.classList.add('show');
                
                // Reset form và ẩn popup sau 3 giây
                setTimeout(() => {
                    contactForm.reset();
                    successPopup.classList.remove('show');
                }, 3000);
            });
        }
    });
