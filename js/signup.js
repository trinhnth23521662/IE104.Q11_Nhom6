
  window.handleLogin = function(event) {
    event.preventDefault(); // Ngăn chuyển trang mặc định

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

    // Nếu hợp lệ → chuyển sang index.html
    window.location.href = "index.html";
  }


