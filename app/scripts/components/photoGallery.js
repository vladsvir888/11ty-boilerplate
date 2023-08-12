import Swiper, { Navigation } from 'swiper';

const photoGallery = () => {
  new Swiper('.photo-gallery .swiper', {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: '.photo-gallery__btn--next',
      prevEl: '.photo-gallery__btn--prev',
    },
    breakpoints: {
      501: {
        slidesPerView: 2,
      },
    },
  });
};

export default photoGallery;
