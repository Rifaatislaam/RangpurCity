const swiper = new Swiper(".slider-wrapper", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,


  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    620: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 4,
    }
  },
});



// <!-- songrokkhito Mohila ashon -->

var swiper2 = new Swiper(".swiper", {
  grabCursor: true,
  slidesPerView: "auto",
  speed: 1000,
  loop: true,

  mousewheel: {
    sensitivity: 1,
  },

  pagination: {
    el: ".pagination-fraction",
    type: "fraction",
  },

  breakpoints: {
    0: {
      spaceBetween: 40,
      centeredSlides: true,
    },

    900: {
      spaceBetween: 50,
      centeredSlides: false,
    },

  },

})