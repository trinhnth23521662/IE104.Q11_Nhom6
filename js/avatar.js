// Script điều hướng avatar thông minh
document.addEventListener('DOMContentLoaded', function() {
    const avatarLink = document.getElementById('avatarLink');
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    
    if (isLoggedIn === 'true') {
        avatarLink.href = 'profile.html'; // Đã login → profile
    } else {
        avatarLink.href = 'login.html'; // Chưa login → login
    }
});
