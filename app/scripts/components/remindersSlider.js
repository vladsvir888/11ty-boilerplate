import Swiper, { Navigation } from 'swiper';

const remindersSlider = () => {
  new Swiper('.reminders__slider', {
    modules: [Navigation],
    slidesPerView: 4,
    spaceBetween: 10,
    navigation: {
      nextEl: '.reminders .section-header__btn--next',
      prevEl: '.reminders .section-header__btn--prev',
    },
  });
};

export default remindersSlider;