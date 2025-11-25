<script>
        // Kiểm tra đăng nhập
        window.addEventListener('DOMContentLoaded', () => {
            const userEmail = localStorage.getItem('userEmail');
            const isLoggedIn = localStorage.getItem('isLoggedIn');
            
            // Nếu chưa đăng nhập, redirect về login
            if (isLoggedIn !== 'true') {
                window.location.href = 'dangnhap.html';
                return;
            }
            
            // Hiển thị email người dùng
            if (userEmail) {
                document.getElementById('userEmail').textContent = userEmail;
                document.getElementById('displayEmail').textContent = userEmail;
            }
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
                window.location.href = 'dangnhap.html';
            }
        }
</script>
