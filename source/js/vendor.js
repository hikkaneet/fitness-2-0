import './vendor/swiper';
import {initTabs} from './vendor/init-tabs';
import {initAccordions} from './vendor/init-accordion';

const initCoachesSwiper = () => {
  // eslint-disable-next-line
  const coachesSwiper = new Swiper('.coaches__swiper', {
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

  coachesSwiper.slides.forEach((slide) => {
    slide.tabIndex = -1;
  });

  for (let i = coachesSwiper.activeIndex; i < (coachesSwiper.activeIndex + coachesSwiper.params.slidesPerView); i++) {
    coachesSwiper.slides[i].tabIndex = 0;
  }

  coachesSwiper.on('slideChange', (swiper) => {
    swiper.slides.forEach((slide) => {
      slide.tabIndex = -1;
    });

    for (let i = swiper.activeIndex; i < (swiper.activeIndex + swiper.params.slidesPerView); i++) {
      swiper.slides[i].tabIndex = 0;
    }
  });
};


const initReviewsSwiper = () => {
  // eslint-disable-next-line
  const reviewsSwiper = new Swiper('.reviews__swiper', {
    direction: 'horizontal',
    slidesPerView: 1,
    autoHeight: true,
    centeredSlides: true,
    navigation: {
      nextEl: '.reviews__button-next',
      prevEl: '.reviews__button-prev',
    },
  });
};

initTabs();
initAccordions();
initCoachesSwiper();
initReviewsSwiper();
