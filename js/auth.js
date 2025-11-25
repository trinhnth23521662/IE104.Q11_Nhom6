// Xử lý authentication cho toàn bộ website

// Cập nhật avatar link dựa trên trạng thái đăng nhập
function updateAvatarLink() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const userAvatarDiv = document.querySelector('.user-avatar');
    
    if (!userAvatarDiv) return;
    
    if (isLoggedIn === 'true') {
        // ĐÃ ĐĂNG NHẬP → Click avatar = vào profile
        userAvatarDiv.innerHTML = `
            <a href="profile.html">
                <img src="./images/avatar.png" alt="User Avatar">
            </a>
        `;
    } else {
        // CHƯA ĐĂNG NHẬP → Click avatar = vào login
        userAvatarDiv.innerHTML = `
            <a href="dangnhap.html">
                <img src="./images/avatar.png" alt="User Avatar">
            </a>
        `;
    }
}

// Khởi tạo khi trang load
document.addEventListener('DOMContentLoaded', function() {
    updateAvatarLink();
});
