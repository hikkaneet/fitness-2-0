import './vendor/swiper';
// import './vendor/swiper-bundle';
import {initTabs} from './vendor/init-tabs';
import {initAccordions} from './vendor/init-accordion';

initTabs();
initAccordions();

// eslint-disable-next-line
const swiperOne = new Swiper('.coaches__swiper', {
  direction: 'horizontal',
  navigation: {
    nextEl: '.coaches__button-next',
    prevEl: '.coaches__button-prev',
  },
  loop: true,
  slidesPerView: 1,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
  autoHeight: true,
});

// eslint-disable-next-line
const swiperTwo = new Swiper('.reviews__swiper', {
  direction: 'horizontal',
  slidesPerView: 1,
  autoHeight: true,
  centeredSlides: true,
  navigation: {
    nextEl: '.reviews__button-next',
    prevEl: '.reviews__button-prev',
  },
});
