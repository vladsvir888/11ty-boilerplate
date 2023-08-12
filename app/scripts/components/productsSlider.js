import Swiper, { Navigation } from 'swiper';

const productsSlider = () => {
  const sections = document.querySelectorAll('.products');

  if (!sections.length) return;

  sections.forEach((section) => {
    const slider = section.querySelector('.products__slider');

    new Swiper(slider, {
      modules: [Navigation],
      slidesPerView: 2,
      spaceBetween: 10,
      navigation: {
        nextEl: section.querySelector('.section-header__btn--next'),
        prevEl: section.querySelector('.section-header__btn--prev'),
      },
      breakpoints: {
        1201: {
          slidesPerView: 4,
        },
        901: {
          slidesPerView: 3,
        },
      },
    });
  });
};

export default productsSlider;
