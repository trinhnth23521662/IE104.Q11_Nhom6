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
    
    // Hiển thị danh sách brands đã theo dõi
    displayFollowedBrands();
});

// Hàm hiển thị danh sách brands đã theo dõi
function displayFollowedBrands() {
    const followedBrands = JSON.parse(localStorage.getItem('followedBrands') || '[]');
    const brandsList = document.getElementById('followedBrandsList');
    
    if (followedBrands.length === 0) {
        brandsList.innerHTML = '<p class="empty-message">Bạn chưa theo dõi brand nào.</p>';
        return;
    }
    
    let brandsHTML = '';
    followedBrands.forEach(brand => {
        brandsHTML += `
            <div class="followed-brand-item">
                <h4>${brand}</h4>
                <p>Đang theo dõi</p>
            </div>
        `;
    });
    
    brandsList.innerHTML = brandsHTML;
}

// Hàm cập nhật số lượng theo dõi trên profile
function updateProfileFollowingCount() {
    const followedBrands = JSON.parse(localStorage.getItem('followedBrands') || '[]');
    const totalFollowing = followedBrands.length;
    
    // Cập nhật số lượng (nếu có element hiển thị)
    const followingElement = document.querySelector('.stat-card:nth-child(2) h3');
    if (followingElement) {
        followingElement.textContent = totalFollowing;
    }
    
    console.log(`Đang theo dõi: ${totalFollowing} brands`);
    console.log('Brands đã theo dõi:', followedBrands);
}
