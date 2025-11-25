window.handleLogin = function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!email || !password) {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }

    // Lấy danh sách user từ localStorage
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
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userEmail", email);

    // Hiển thị popup thành công 
    const popup = document.getElementById("successPopup");
    if (popup) {
        popup.classList.add("show");
        setTimeout(() => {
            window.location.href = "profile.html";
        }, 2000); 
    } else {
       
        window.location.href = "profile.html";
    }
};
