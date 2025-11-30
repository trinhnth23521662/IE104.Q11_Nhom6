    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "./css/search.css";
    document.head.appendChild(link);

    let searchData = [];

    fetch("./data/searchData.json")
      .then((res) => res.json())
      .then((data) => (searchData = data))
      .catch((err) => console.error("Lỗi tải searchData:", err));

    document.addEventListener('DOMContentLoaded', function() {
        const searchInput = document.querySelector('.search-bar input');
        const searchBar = document.querySelector('.search-bar');
        
        // Tạo dropdown suggestions
        const suggestionsDiv = document.createElement('div');
        suggestionsDiv.className = 'search-suggestions';
        searchBar.appendChild(suggestionsDiv);
        
        // Xử lý khi người dùng nhập
        searchInput.addEventListener('input', function(e) {
            const query = e.target.value.toLowerCase().trim();
            
            if (query.length === 0) {
                suggestionsDiv.classList.remove('active');
                return;
            }
            
            // Lọc kết quả
            const results = searchData.filter(item => 
                item.title.toLowerCase().includes(query) || 
                item.category.toLowerCase().includes(query)
            );
            
            // Hiển thị kết quả
            if (results.length > 0) {
                suggestionsDiv.innerHTML = results.map(item => `
                    <div class="suggestion-item" data-link="${item.link}">
                        <div class="suggestion-icon">${item.icon}</div>
                        <div class="suggestion-text">
                            <div class="suggestion-title">${item.title}</div>
                            <div class="suggestion-category">${item.category}</div>
                        </div>
                    </div>
                `).join('');
                suggestionsDiv.classList.add('active');
            } else {
                suggestionsDiv.innerHTML = '<div class="no-results">Không tìm thấy kết quả</div>';
                suggestionsDiv.classList.add('active');
            }
            
            // Xử lý click vào suggestion
            document.querySelectorAll('.suggestion-item').forEach(item => {
                item.addEventListener('click', function() {
                    const link = this.getAttribute('data-link');
                    if (link && link !== '#') {
                        window.location.href = link;
                    }
                });
            });
        });
        
        // Đóng dropdown khi click ra ngoài
        document.addEventListener('click', function(e) {
            if (!searchBar.contains(e.target)) {
                suggestionsDiv.classList.remove('active');
            }
        });
        
        // Xử lý khi focus vào search
        searchInput.addEventListener('focus', function() {
            if (this.value.trim().length > 0) {
                suggestionsDiv.classList.add('active');
            }
        });
    });
