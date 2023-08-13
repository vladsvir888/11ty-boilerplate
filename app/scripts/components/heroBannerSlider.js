import Swiper from 'swiper';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

const heroBannerSlider = () => {
  new Swiper('.hero__slider', {
    modules: [Pagination, Navigation, Autoplay],
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.hero__pagination',
      clickable: true,
      bulletClass: 'hero__pagination-bullet',
      bulletActiveClass: 'hero__pagination-bullet--active',
      renderBullet(index, className) {
        return `<button class="btn ${className}" aria-label="Слайд ${index + 1}"></button>`;
      },
    },
    navigation: {
      nextEl: '.hero__slider-btn--next',
      prevEl: '.hero__slider-btn--prev',
    },
  });
};

export default heroBannerSlider;
