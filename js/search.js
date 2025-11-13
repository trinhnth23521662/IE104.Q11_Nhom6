    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "search.css";
    document.head.appendChild(link);
    // Dữ liệu mẫu cho search suggestions
    const searchData = [
        { title: "Levents", category: "Thương hiệu", icon: "ᥫ᭡", link: "levents.html" },
        { title: "Dirty Coins", category: "Thương hiệu", icon: "ᥫ᭡", link: "dirtycoins.html" },
        { title: "Teelab", category: "Thương hiệu", icon: "ᥫ᭡", link: "#" },
        { title: "Hoodie", category: "Sản phẩm", icon: "𝜗ৎ", link: "#" },
        { title: "T-shirt", category: "Sản phẩm", icon: "𝜗ৎ", link: "#" },
        { title: "Streetwear", category: "Phong cách", icon: "♛", link: "#" },
        { title: "Minimalist", category: "Phong cách", icon: "♛", link: "#" },
        { title: "Vintage", category: "Phong cách", icon: "♛", link: "#" },
        { title: "Áo thun", category: "Sản phẩm", icon: "𝜗ৎ", link: "#" },
        { title: "Túi Tote", category: "Sản phẩm", icon: "𝜗ৎ", link: "#" },
        { title: "Local Brand", category: "Danh mục", icon: "✶", link: "brands.html" },
        { title: "About", category: "Danh mục", icon: "✶", link: "about.html" },
        { title: "Thời trang thu đông", category: "Khám phá", icon: "𓏵", link: "khampha.html" },
        { title: "Retro cổ điển", category: "Khám phá", icon: "𓏵", link: "khampha.html" },
        { title: "Thời trang nam", category: "Khám phá", icon: "𓏵", link: "khampha.html" },
        { title: "Phụ kiện hot", category: "Khám phá", icon: "𓏵", link: "khampha.html" },
        { title: "Tư vấn phối đồ", category: "Bộ sưu tập", icon: "❀", link: "collection.html" },
        { title: "Style đi học", category: "Bộ sưu tập", icon: "❀", link: "collection.html" },
        { title: "Mẹo phối đồ nhanh", category: "Bộ sưu tập", icon: "❀", link: "collection.html" },

    ];

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
    