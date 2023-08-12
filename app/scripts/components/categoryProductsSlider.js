import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

const categoryProductsSlider = () => {
  new Swiper('.category-products__slider', {
    modules: [Navigation],
    slidesPerView: 1.4,
    spaceBetween: 10,
    navigation: {
      nextEl: '.category-products .section-header__btn--next',
      prevEl: '.category-products .section-header__btn--prev',
    },
    breakpoints: {
      1201: {
        slidesPerView: 4,
      },
      901: {
        slidesPerView: 3,
      },
      601: {
        slidesPerView: 2,
      },
    },
  });
};

export default categoryProductsSlider;
