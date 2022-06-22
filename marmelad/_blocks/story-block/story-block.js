function initStoryBlockSlider() {
  const swiper = new Swiper(".js-story-block-slider", {
    slidesPerView: 1,
    spaceBetween: 100,
    autoHeight: true,
    loop: true,
    effect: "fade",
    navigation: {
      nextEl: ".story-block__buttons .swiper-button-next",
      prevEl: ".story-block__buttons .swiper-button-prev",
    },
  });
}

initStoryBlockSlider();