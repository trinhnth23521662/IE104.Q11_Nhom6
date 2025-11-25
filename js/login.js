// Xử lý đăng nhập
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        // Kiểm tra thông tin đăng nhập
        if (email && password) {
            // Lưu thông tin đăng nhập
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('userEmail', email);
            
            // Hiển thị popup thành công
            const popup = document.getElementById('successPopup');
            popup.classList.add('show');
            
            // Chuyển hướng sau 2 giây
            setTimeout(function() {
                window.location.href = 'profile.html';
            }, 2000);
        } else {
            alert('Vui lòng nhập đầy đủ thông tin!');
        }
    });
});
