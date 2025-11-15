const arrow = document.getElementById("Arrow");

arrow.style.display = "none";

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    arrow.style.display = "flex";
  } else {
    arrow.style.display = "none";
  }
});

arrow.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 241,
    behavior: "smooth"
  });
});
