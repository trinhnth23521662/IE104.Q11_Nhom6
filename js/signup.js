window.handleSignup = function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirm-password").value.trim();

    if (!email || !password || !confirmPassword) {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }

    if (password !== confirmPassword) {
        alert("Mật khẩu nhập lại không khớp!");
        return;
    }

    // Lưu tài khoản
    let users = JSON.parse(localStorage.getItem("users")) || {};
    users[email] = password;
    localStorage.setItem("users", JSON.stringify(users));

    // Chuyển sang trang đăng nhập
    window.location.href = "login.html"; 
};
