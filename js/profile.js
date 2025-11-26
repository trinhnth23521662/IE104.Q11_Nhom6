// Load user data and handle authentication
window.addEventListener('DOMContentLoaded', () => {
    const userEmail = localStorage.getItem('userEmail');
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    
    // Redirect if not logged in
    if (isLoggedIn !== 'true') {
        window.location.href = 'login.html';
        return;
    }
    
    // Display user email
    if (userEmail) {
        document.getElementById('userEmail').textContent = userEmail;
        document.getElementById('displayEmail').textContent = userEmail;
    }
    
    // Hiển thị số lượng brands đang theo dõi
    updateProfileFollowingCount();
});

// Hàm cập nhật số lượng theo dõi trên profile
function updateProfileFollowingCount() {
    const totalFollowing = localStorage.getItem('totalFollowing') || '0';
    const followedBrands = JSON.parse(localStorage.getItem('followedBrands') || '[]');
    
    // Cập nhật số lượng (nếu có element hiển thị)
    const followingElement = document.querySelector('.stat-card:nth-child(2) h3');
    if (followingElement) {
        followingElement.textContent = totalFollowing;
    }
    
    console.log(`Đang theo dõi: ${totalFollowing} brands`);
    console.log('Brands đã theo dõi:', followedBrands);
}

// Handle logout functionality
function handleLogout() {
    if (confirm('Bạn có chắc chắn muốn đăng xuất?')) {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('userEmail');
        window.location.href = 'login.html';
    }
}
