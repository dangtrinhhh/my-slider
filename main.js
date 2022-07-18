const sliderElm = document.querySelector(".slider");
const leftElm = document.querySelector(".left");
const rightElm = document.querySelector(".right");
const slidesElm = document.querySelectorAll(".slider .slide");
let current = 0;

function moveLeft() {
  if (current === 0) current = slidesElm.length - 1;
  else current -= 1;
}

function moveRight() {
  if (current === slidesElm.length - 1) current = 0;
  else current += 1;
}

function changeBackground() {
  setTimeout(function () {
    let img = slidesElm[current].querySelector(".col"),
      style = img.currentStyle || window.getComputedStyle(img, false),
      bi = style.backgroundImage.slice(4, -1).replace("/"/g, "");
    sliderElm.style.backgroundImage = `url('${bi}')`;
  }, 800);
}

function activeSlide() {
  slidesElm.forEach((slide, i) => {
    if (current === i) slide.classList.add("active");
    else slide.classList.remove("active");
  });
  changeBackground();
}

activeSlide();

leftElm.addEventListener("click", function () {
  moveLeft();
  activeSlide();
});

rightElm.addEventListener("click", function () {
  moveRight();
  activeSlide();
});
