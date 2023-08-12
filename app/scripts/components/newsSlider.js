import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

const newsSlider = () => {
  const sliders = document.querySelectorAll('.news-slider__slider');

  sliders.forEach((slider) => {
    new Swiper(slider, {
      modules: [Navigation],
      slidesPerView: 1,
      spaceBetween: 10,
      navigation: {
        nextEl: slider.parentElement.querySelector('.section-header__btn--next'),
        prevEl: slider.parentElement.querySelector('.section-header__btn--prev'),
      },
      breakpoints: {
        601: {
          slidesPerView: 2,
        },
        1201: {
          slidesPerView: 3,
        },
        // 901: {
        //   slidesPerView: 3,
        // },
      },
    });
  });
};

export default newsSlider;
