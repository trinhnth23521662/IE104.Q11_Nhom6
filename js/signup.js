function handleSignup(event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirm-password").value.trim();

    if (password !== confirmPassword) {
        alert("Mật khẩu nhập lại không khớp!");
        return;
    }

    // Lấy dữ liệu user 
    let users = JSON.parse(localStorage.getItem("users")) || {};

    if (users[email]) {
        alert("Email này đã được đăng ký trước đó!");
        return;
    }

    // Thêm user mới
    users[email] = password;
    localStorage.setItem("users", JSON.stringify(users));

    alert("Đăng ký thành công!");
    document.getElementById("signupForm").reset();
    window.location.href = "login.html"; 
}
