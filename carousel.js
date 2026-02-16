document.addEventListener('DOMContentLoaded', function(){
  
  // Main horizontal carousel
  const mainCarousel = document.querySelector('.carousel');
  if (mainCarousel) {
    const track = mainCarousel.querySelector('.carousel-track');
    const slides = Array.from(track.querySelectorAll('.slide'));
    let mainIdx = 0;

    const updateMain = () => {
      track.style.transform = `translateX(-${mainIdx * 100}%)`;
    };

    mainCarousel.querySelector('.prev')?.addEventListener('click', () => {
      mainIdx = Math.max(0, mainIdx - 1);
      updateMain();
    });

    mainCarousel.querySelector('.next')?.addEventListener('click', () => {
      mainIdx = Math.min(slides.length - 1, mainIdx + 1);
      updateMain();
    });
  }

  // Vertical videos carousel (horizontal scroll / right-to-left)
  const verticalCarousels = document.querySelectorAll('.vertical-carousel');
  verticalCarousels.forEach(vc => {
    const wrapper = vc.querySelector('.v-track-wrapper');
    const track = vc.querySelector('.v-track');
    const slides = Array.from(track.querySelectorAll('.v-slide'));
    const prevBtn = vc.querySelector('.v-prev');
    const nextBtn = vc.querySelector('.v-next');
    
    let vertIdx = 0;

    const updateVertical = () => {
      const slideWidth = wrapper.offsetWidth;
      const translateVal = vertIdx * slideWidth;
      track.style.transform = `translateX(-${translateVal}px)`;
    };

    prevBtn?.addEventListener('click', () => {
      vertIdx = Math.max(0, vertIdx - 1);
      updateVertical();
    });

    nextBtn?.addEventListener('click', () => {
      vertIdx = Math.min(slides.length - 1, vertIdx + 1);
      updateVertical();
    });

    // Wheel navigation
    vc.addEventListener('wheel', (e) => {
      e.preventDefault?.();
      if (e.deltaY > 0) {
        vertIdx = Math.min(slides.length - 1, vertIdx + 1);
      } else {
        vertIdx = Math.max(0, vertIdx - 1);
      }
      updateVertical();
    });

    // Touch/swipe support
    let touchStartX = 0;
    wrapper.addEventListener('touchstart', (e) => {
      touchStartX = e.touches[0].clientX;
    }, { passive: true });

    wrapper.addEventListener('touchend', (e) => {
      const touchEndX = e.changedTouches[0].clientX;
      const diff = touchStartX - touchEndX;
      if (diff > 50) {
        vertIdx = Math.min(slides.length - 1, vertIdx + 1);
      } else if (diff < -50) {
        vertIdx = Math.max(0, vertIdx - 1);
      }
      updateVertical();
    }, { passive: true });

    // Set initial state and handle resize
    updateVertical();
    window.addEventListener('resize', updateVertical);
  });

  // Feedback carousel
  const feedbackCarousel = document.querySelector('.feedback-carousel');
  if (feedbackCarousel) {
    const feedbackTrack = feedbackCarousel.querySelector('.feedback-track');
    const feedbackSlides = feedbackTrack.querySelectorAll('.feedback-slide');
    let feedIdx = 0;

    const updateFeed = () => {
      feedbackTrack.style.transform = `translateX(-${feedIdx * 100}%)`;
    };

    feedbackCarousel.querySelector('.prev')?.addEventListener('click', () => {
      feedIdx = Math.max(0, feedIdx - 1);
      updateFeed();
    });

    feedbackCarousel.querySelector('.next')?.addEventListener('click', () => {
      feedIdx = Math.min(feedbackSlides.length - 1, feedIdx + 1);
      updateFeed();
    });
  }

});

