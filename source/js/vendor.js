// Swiper 7.4.1
import './vendor/swiper';
import './vendor/focus-visible-polyfill';

import {initTabs} from './vendor/init-tabs';

initTabs();

// eslint-disable-next-line
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: true,
  slidesPerView: 1,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});
