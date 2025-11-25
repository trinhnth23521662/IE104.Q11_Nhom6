window.handleLogin = function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Lấy dữ liệu người dùng từ localStorage
    const users = JSON.parse(localStorage.getItem("users")) || {};

    if (!users[email]) {
        alert("Email chưa được đăng ký!");
        return;
    }

    if (users[email] !== password) {
        alert("Mật khẩu không đúng!");
        return;
    }

    // Lưu trạng thái đăng nhập
    localStorage.setItem("loginSuccess", "true");

    // Chuyển sang trang chính
    window.location.href = "index.html";
};
