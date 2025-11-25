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
});

// Handle logout functionality
function handleLogout(event) {
    event.preventDefault();
    
    if (confirm('Bạn có chắc chắn muốn đăng xuất?')) {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('userEmail');
        window.location.href = 'login.html';
    }
}

// Handle edit profile (placeholder function)
function handleEditProfile(event) {
    event.preventDefault();
    alert('Tính năng chỉnh sửa đang phát triển!');
}