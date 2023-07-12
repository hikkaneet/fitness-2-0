const addCoachesMoreInfoClass = () => {
  const coachesSlider = document.querySelector('.coaches__slider');
  const coachesProfiles = document.querySelectorAll('.coaches__profile');

  const isMobile = window.matchMedia('(max-width: 1200px)').matches;

  if (isMobile) {
    coachesSlider.addEventListener('click', (event) => {
      const target = event.target.closest('.coaches__profile');
      if (target) {
        const moreInfo = target.querySelector('.coaches__more-info');
        const name = target.querySelector('.coaches__name');
        if (moreInfo) {
          if (moreInfo.classList.contains('coaches__more-info--visible')) {
            moreInfo.classList.remove('coaches__more-info--visible');
            name.classList.remove('coaches__name--hidden');
          } else {
            moreInfo.classList.add('coaches__more-info--visible');
            name.classList.add('coaches__name--hidden');
          }
        }
      }
    });
  } else {
    coachesProfiles.forEach((profile) => {
      profile.addEventListener('mouseenter', () => {
        const moreInfo = profile.querySelector('.coaches__more-info');
        const name = profile.querySelector('.coaches__name');
        if (moreInfo) {
          moreInfo.classList.add('coaches__more-info--visible');
          name.classList.add('coaches__name--hidden');
        }
      });

      profile.addEventListener('mouseleave', () => {
        const moreInfo = profile.querySelector('.coaches__more-info');
        const name = profile.querySelector('.coaches__name');
        if (moreInfo) {
          moreInfo.classList.remove('coaches__more-info--visible');
          name.classList.remove('coaches__name--hidden');
        }
      });
    });
  }
};

export {addCoachesMoreInfoClass};
