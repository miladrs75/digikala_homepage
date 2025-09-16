const mobileSearchInp = document.querySelector(".mobile-search-input");
const mobileSearchInnerInp = document.querySelector(
  ".search-box__mobile-form--input"
);
const searchBox = document.querySelector(".search-box__mobile");
const mobileCloseBtn = document.querySelector(
  ".search-box__mobile-form--close-btn"
);

mobileSearchInp.addEventListener("focus", () => {
  searchBox.style.display = "block";
  document.body.style.overflow = "hidden";
  mobileSearchInnerInp.focus();
});

mobileCloseBtn.addEventListener('click',()=>{
    searchBox.style.display = "none";
    document.body.style.overflow = "";
})
