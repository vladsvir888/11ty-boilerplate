import Swiper, { Pagination } from 'swiper';

const productCardSlider = () => {
  new Swiper('.product-slider', {
    modules: [Pagination],
    nested: true,
    pagination: {
      el: '.product-slider__pagination',
      clickable: true,
      bulletClass: 'product-slider__pagination-bullet',
      bulletActiveClass: 'product-slider__pagination-bullet--active',
      renderBullet(index, className) {
        return `<button class="btn ${className}" aria-label="Слайд ${index + 1}"></button>`;
      },
    },
  });
};

export default productCardSlider;
