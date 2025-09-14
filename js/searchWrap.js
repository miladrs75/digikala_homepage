const searchInp = document.querySelector(".desktop-search-input");
const adBox = document.querySelector(".site-header__search-wrap--ad-box");
const closeBtn = document.querySelector(".site-header__search-wrap--close-btn");
const searchBackDrop = document.querySelector(".search-backdrop");

function handleCloseAdBox() {
  adBox.style.opacity = "0";
  searchInp.style.borderRadius = "8px";
  searchBackDrop.style.display = "none";
  document.body.style.overflow = "";
}

searchInp.addEventListener("focus", () => {
  adBox.style.opacity = "1";
  searchInp.style.borderRadius = "8px 8px 0 0";
  searchBackDrop.style.display = "block";
  document.body.style.overflow = "hidden";
});

searchInp.addEventListener("blur", () => {
  handleCloseAdBox();
});

closeBtn.addEventListener("click", () => {
  handleCloseAdBox();
});
