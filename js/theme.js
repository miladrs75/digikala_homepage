const root = document.documentElement;
const themeBtns = document.querySelectorAll(".site-header__btn--theme");
const darkIcon = `<span class="material-symbols-outlined"> dark_mode </span>`;
const lightkIcon = `<span class="material-symbols-outlined"> wb_sunny </span>`;

themeBtns.forEach((themeBtn) => {
  themeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (root.getAttribute("data-theme") === "dark") {
      root.removeAttribute("data-theme");
    } else {
      root.setAttribute("data-theme", "dark");
    }

    themeBtns.forEach((btn) => {
      if (root.getAttribute("data-theme") === "dark") {
        btn.innerHTML = lightkIcon;
      } else {
        btn.innerHTML = darkIcon;
      }
    });
  });
});
