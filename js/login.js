<script>
        // Kiểm tra đăng nhập
        window.addEventListener('DOMContentLoaded', () => {
            const userEmail = localStorage.getItem('userEmail');
            const isLoggedIn = localStorage.getItem('isLoggedIn');
            
            // Nếu chưa đăng nhập, redirect về login
            if (isLoggedIn !== 'true') {
                window.location.href = 'login.html';
                return;
            }
            
            // Hiển thị email người dùng
            if (userEmail) {
                document.getElementById('userEmail').textContent = userEmail;
                document.getElementById('displayEmail').textContent = userEmail;
            }

        // Nếu đăng nhập thành công, hiển thị popup
            const popup = document.getElementById('successPopup');
            popup.classList.add('show');

        // Sau đó chuyển hướng về trang chủ
            setTimeout(() => {
                window.location.href = 'profile.html';
            }, 2000);
        });

        // Hàm đăng xuất
        function handleLogout() {
            if (confirm('Bạn có chắc chắn muốn đăng xuất?')) {
                // Xóa thông tin đăng nhập
                localStorage.removeItem('isLoggedIn');
                localStorage.removeItem('userEmail');
                
                // Hiển thị thông báo
                alert('✓ Đã đăng xuất thành công!');
                
                // Chuyển về trang đăng nhập
                window.location.href = 'login.html';
            }
        }
</script>
