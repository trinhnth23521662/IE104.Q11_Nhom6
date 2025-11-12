document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".brand-card");
  const tags = document.querySelectorAll(".category-tags .tag");
  const sortSelect = document.querySelector(".filter-dropdown");
  const applyBtn = document.querySelector(".apply-btn");

  // --- Lọc theo tag ---
  tags.forEach(tag => {
    tag.addEventListener("click", () => {
      tags.forEach(t => t.classList.remove("active"));
      tag.classList.add("active");

      const selected = tag.textContent.trim().toLowerCase();

      // Lọc các thẻ card
      cards.forEach(card => {
        const text = card.textContent.toLowerCase();

        if (selected === "tất cả" || text.includes(selected)) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  // --- Hàm sắp xếp ---
  function sortCards(type) {
    const grid = document.querySelector(".brands-grid");
    const list = Array.from(cards);

    if (type === "A-Z") {
      list.sort((a, b) => {
        const nameA = a.querySelector("h3").textContent;
        const nameB = b.querySelector("h3").textContent;
        return nameA.localeCompare(nameB);
      });
    } else if (type === "Phổ Biến Nhất") {
      list.sort((a, b) => {
        const fa = parseInt(a.querySelector(".follower-count").textContent);
        const fb = parseInt(b.querySelector(".follower-count").textContent);
        return fb - fa;
      });
    } else if (type === "Mới Nhất") {
      list.reverse();
    }

    grid.innerHTML = "";
    list.forEach(c => grid.appendChild(c));
  }

  // --- Áp dụng sắp xếp ---
  applyBtn.addEventListener("click", () => sortCards(sortSelect.value));
});
