// Xử lý theo dõi brands
document.addEventListener('DOMContentLoaded', function() {
    const followButtons = document.querySelectorAll('.follow-btn');
    
    // Load trạng thái theo dõi từ localStorage
    loadFollowStatus();
    
    // Xử lý sự kiện click cho nút theo dõi
    followButtons.forEach(button => {
        button.addEventListener('click', function() {
            const brandName = this.getAttribute('data-brand');
            toggleFollowBrand(brandName, this);
        });
    });
});

// Hàm bật/tắt theo dõi brand
function toggleFollowBrand(brandName, button) {
    let followedBrands = JSON.parse(localStorage.getItem('followedBrands') || '[]');
    
    if (followedBrands.includes(brandName)) {
        // Đã theo dõi -> bỏ theo dõi
        followedBrands = followedBrands.filter(brand => brand !== brandName);
        button.textContent = 'THEO DÕI';
        button.classList.remove('following');
        updateProfileStats(-1);
    } else {
        // Chưa theo dõi -> theo dõi
        followedBrands.push(brandName);
        button.textContent = 'ĐÃ THEO DÕI';
        button.classList.add('following');
        updateProfileStats(1);
    }
    
    // Lưu vào localStorage
    localStorage.setItem('followedBrands', JSON.stringify(followedBrands));
    
    // Hiệu ứng visual
    button.style.transform = 'scale(0.95)';
    setTimeout(() => {
        button.style.transform = 'scale(1)';
    }, 150);
}

// Hàm cập nhật số liệu profile
function updateProfileStats(change) {
    let currentFollowing = parseInt(localStorage.getItem('totalFollowing') || '0');
    currentFollowing += change;
    localStorage.setItem('totalFollowing', currentFollowing.toString());
}

// Hàm load trạng thái theo dõi khi trang được tải
function loadFollowStatus() {
    const followedBrands = JSON.parse(localStorage.getItem('followedBrands') || '[]');
    const followButtons = document.querySelectorAll('.follow-btn');
    
    followButtons.forEach(button => {
        const brandName = button.getAttribute('data-brand');
        if (followedBrands.includes(brandName)) {
            button.textContent = 'ĐÃ THEO DÕI';
            button.classList.add('following');
        }
    });
}
