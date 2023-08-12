import Swiper, { Grid, Navigation } from 'swiper';

const categoryProductsSliderPortal = () => {
  new Swiper('.category-products-portal__slider', {
    modules: [Navigation, Grid],
    slidesPerView: 6,
    grid: {
      rows: 2,
      fill: 'row',
    },
    spaceBetween: 10,
    navigation: {
      nextEl: '.category-products-portal .section-header__btn--next',
      prevEl: '.category-products-portal .section-header__btn--prev',
    },
  });
};

export default categoryProductsSliderPortal;
