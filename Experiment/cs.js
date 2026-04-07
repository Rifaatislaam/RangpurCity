const slides = document.querySelectorAll(".slide");

var counter = 0;

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

const goPrev = () => {
  counter--;
  slideImage(5);
};

const goNext = () => {
  counter++;
  slideImage(5);
};

const slideImage = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};
