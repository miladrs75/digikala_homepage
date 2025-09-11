const root = document.documentElement;
const themeBtns = document.querySelectorAll(".site-header__btn--theme");

themeBtns.forEach((themeBtn) => {
  themeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (root.getAttribute("data-theme") === "dark") {
      root.removeAttribute("data-theme"); 
    } else {
      root.setAttribute("data-theme", "dark"); 
    }
  });
});

