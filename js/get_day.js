 const joinDateEl = document.getElementById("joinDate");

  // Lấy ngày hôm nay
  const today = new Date();

  // Format dd/mm/yyyy
  const day = String(today.getDate()).padStart(2, '0');
  const month = String(today.getMonth() + 1).padStart(2, '0'); // Tháng bắt đầu từ 0
  const year = today.getFullYear();

  joinDateEl.textContent = `${day}/${month}/${year}`;