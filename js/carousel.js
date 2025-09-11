const carousel = document.querySelector(".main__carousel");
const carouselSlides = document.querySelector(".main__carousel-slides");
const carouselBtnBox = document.querySelector(".main__carousel-btns");
const carouselPrevBtn = document.querySelector(".main__carousel-btn-prev");
const carouselNextBtn = document.querySelector(".main__carousel-btn-next");
const carouselIndiacators = document.querySelectorAll(
  ".main__carousel-indicator"
);
const carouselSlideItems = document.querySelectorAll(
  ".main__carousel-slides--item"
);

function handleNextSlide() {
  const activeSlide = document.querySelector(
    ".main__carousel-slides--item-active"
  );
  activeSlide.classList.remove("main__carousel-slides--item-active");
  if (activeSlide.nextElementSibling === null) {
    carouselSlides.firstElementChild.classList.add(
      "main__carousel-slides--item-active"
    );
  } else {
    activeSlide.nextElementSibling.classList.add(
      "main__carousel-slides--item-active"
    );
  }
  carouselIndiacators.forEach((indicator) =>
    indicator.classList.remove("active")
  );
}

function handlePrevSlide() {
  const activeSlide = document.querySelector(
    ".main__carousel-slides--item-active"
  );
  activeSlide.classList.remove("main__carousel-slides--item-active");
  if (activeSlide.previousElementSibling === null) {
    carouselSlides.lastElementChild.classList.add(
      "main__carousel-slides--item-active"
    );
  } else {
    activeSlide.previousElementSibling.classList.add(
      "main__carousel-slides--item-active"
    );
  }
  carouselIndiacators.forEach((indicator) =>
    indicator.classList.remove("active")
  );
}

let nextSlideInterval;

function handleNextSlideInterval() {
  nextSlideInterval = setInterval(() => {
    handleNextSlide();
  }, 3000);
}

handleNextSlideInterval();

carouselSlides.addEventListener("mouseenter", () => {
  clearInterval(nextSlideInterval);
});

carouselSlides.addEventListener("mouseleave", () => {
  handleNextSlideInterval();
});

carousel.addEventListener("mouseenter", () => {
  carouselBtnBox.style.opacity = 1;
});

carousel.addEventListener("mouseleave", () => {
  carouselBtnBox.style.opacity = 0;
});

carouselNextBtn.addEventListener("click", () => {
  handleNextSlide();
});

carouselPrevBtn.addEventListener("click", () => {
  handlePrevSlide();
});

let touchStart = 0;
let touchEnd = 0;

carouselSlides.addEventListener("touchstart", (e) => {
  touchStart = e.touches[0].clientX;
  clearInterval(nextSlideInterval);
});

carouselSlides.addEventListener("touchend", (e) => {
  touchEnd = e.changedTouches[0].clientX;

  touchStart > touchEnd ? handleNextSlide() : handlePrevSlide();
  carouselIndiacators.forEach((indicator) => {
    indicator.classList.remove("active");
    indicator.style.backgroundColor = "v.$color-text-primary";
  });
  handleNextSlideInterval();
});

carouselIndiacators.forEach((indicator) => {
  indicator.addEventListener("click", (e) => {
    e.preventDefault();

    carouselSlideItems.forEach((slideItem) =>
      slideItem.classList.remove("main__carousel-slides--item-active")
    );
    carouselIndiacators.forEach((ind) => ind.classList.remove("active"));

    const targetId = indicator.getAttribute("href");
    const targetSlide = document.querySelector(targetId);

    targetSlide.classList.add("main__carousel-slides--item-active");
    indicator.classList.add("active");
  });
});
