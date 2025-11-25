// Thông tin đăng nhập cố định cho demo
const DEMO_EMAIL = "demo@vinistyle.com";
const DEMO_PASSWORD = "vinistyle2024";

function handleLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');
    const successPopup = document.getElementById('successPopup');
    
    // Reset thông báo lỗi
    errorMessage.style.display = 'none';
    
    // Kiểm tra dữ liệu cơ bản
    if (!email || !password) {
        errorMessage.textContent = 'Vui lòng nhập đầy đủ email và mật khẩu.';
        errorMessage.style.display = 'block';
        return;
    }
    
    // Kiểm tra thông tin đăng nhập demo
    if (email === DEMO_EMAIL && password === DEMO_PASSWORD) {
        // Lưu trạng thái đăng nhập
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userEmail', email);
        
        // Hiển thị popup thành công
        successPopup.classList.add('show');
        
        // Chuyển hướng sau 2.5 giây
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 2500);
    } else {
        errorMessage.textContent = 'Email hoặc mật khẩu không đúng. Demo: demo@vinistyle.com / vinistyle2024';
        errorMessage.style.display = 'block';
    }
}

function handleLogout(event) {
    event.preventDefault();
    
    // Xác nhận đăng xuất
    if (confirm('Bạn có chắc chắn muốn đăng xuất?')) {
        // Xóa trạng thái đăng nhập
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('userEmail');
        
        // Chuyển hướng về trang đăng nhập
        window.location.href = 'dangnhap.html';
    }
}

// Kiểm tra xem người dùng đã đăng nhập chưa
function checkLoginStatus() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
        // Nếu đã đăng nhập, chuyển hướng về trang chủ
        window.location.href = 'index.html';
    }
}

// Khởi tạo khi DOM đã tải xong
document.addEventListener('DOMContentLoaded', function() {
    checkLoginStatus();
    
    // Thêm sự kiện cho form đăng nhập
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
    
    // Thêm sự kiện input để ẩn thông báo lỗi khi người dùng bắt đầu nhập
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    
    if (emailInput) {
        emailInput.addEventListener('input', function() {
            document.getElementById('errorMessage').style.display = 'none';
        });
    }
    
    if (passwordInput) {
        passwordInput.addEventListener('input', function() {
            document.getElementById('errorMessage').style.display = 'none';
        });
    }
});