import { menuData } from "./categoryMenuData.js";

const categoryContainer = document.querySelector(".side-menu__categories");
const subcategoryContainer = document.querySelector(
  ".side-menu__subcategories"
);
const sideMenuLink = document.querySelector(
  ".site-nav__desktop--category-item"
);
const sideMenu = document.querySelector(
  ".site-nav__desktop--category--side-menu--inactive"
);
const backDrop = document.querySelector(".menu-backdrop");
const header = document.querySelector(".site-header");

menuData.forEach((item) => {
  const categoryItem = document.createElement("a");
  categoryItem.href = "#";
  categoryItem.className = "side-menu__categories-item";
  categoryItem.innerHTML = `<span class="material-symbols-outlined">${item.icon}</span> ${item.title}`;
  categoryContainer.appendChild(categoryItem);

  const subcategorySection = document.createElement("div");
  subcategorySection.className =
    "side-menu__subcategories-section subcategories-section--inactive";

  let subHTML = `<a href="#" class="side-menu__subcategories-section--header">همه محصولات ${item.title} <span class="material-symbols-outlined">chevron_left</span></a>`;
  subHTML += `<div class="side-menu__subcategories-section--body">`;

  item.subcategories.forEach((sub) => {
    subHTML += `<div class="side-menu__subcategories-section--body-item">
                  <a href="#" class="title__link">${sub.title}<span class="material-symbols-outlined">chevron_left</span></a>`;
    if (sub.children) {
      sub.children.forEach((child) => {
        subHTML += `<a href="#" class="subtitle__link">${child}</a>`;
      });
    }
    subHTML += `</div>`;
  });

  subHTML += `</div>`;
  subcategorySection.innerHTML = subHTML;
  subcategoryContainer.appendChild(subcategorySection);
});

const categoryItems = document.querySelectorAll(".side-menu__categories-item");
const subcategorySections = document.querySelectorAll(
  ".side-menu__subcategories-section"
);

sideMenuLink.addEventListener("mousemove", () => {
  sideMenu.classList.add("site-nav__desktop--category--side-menu");
  subcategoryContainer.firstElementChild.classList.remove(
    "subcategories-section--inactive"
  );
  backDrop.style.display = "block";
});

sideMenu.addEventListener("mouseleave", () => {
  sideMenu.classList.remove("site-nav__desktop--category--side-menu");
  backDrop.style.display = "none";
  subcategorySections.forEach((s) =>
    s.classList.add("subcategories-section--inactive")
  );
});

backDrop.addEventListener("mouseenter", () => {
  sideMenu.classList.remove("site-nav__desktop--category--side-menu");
  backDrop.style.display = "none";
});

categoryItems.forEach((categoryItem, i) => {
  const subcategory = subcategorySections[i];

  categoryItem.addEventListener("mouseenter", () => {
    subcategorySections.forEach((s) =>
      s.classList.add("subcategories-section--inactive")
    );
    subcategory.classList.remove("subcategories-section--inactive");
  });
});

header.addEventListener("mouseenter", () => {
  sideMenu.classList.remove("site-nav__desktop--category--side-menu");
  backDrop.style.display = "none";
});
