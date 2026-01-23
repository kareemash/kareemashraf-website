document.addEventListener("DOMContentLoaded", function () {

  const track = document.querySelector('.carousel-track');
  const slides = document.querySelectorAll('.slide');
  const nextBtn = document.querySelector('.next');
  const prevBtn = document.querySelector('.prev');

  if (!track || slides.length === 0 || !nextBtn || !prevBtn) {
    console.error("Carousel elements not found");
    return;
  }

  let index = 0;

  function updateCarousel() {
    track.style.transform = `translateX(-${index * 100}%)`;
  }

  nextBtn.addEventListener('click', () => {
    index = (index + 1) % slides.length;
    updateCarousel();
    pauseAllVideos();
  });

  prevBtn.addEventListener('click', () => {
    index = (index - 1 + slides.length) % slides.length;
    updateCarousel();
    pauseAllVideos();
  });

  function pauseAllVideos() {
    document.querySelectorAll('video').forEach(video => video.pause());
  }


});
document.addEventListener("DOMContentLoaded", () => {

  const carousel = document.querySelector('.feedback-carousel');
  const track = carousel.querySelector('.feedback-track');
  const slides = carousel.querySelectorAll('.feedback-slide');
  const nextBtn = carousel.querySelector('.next');
  const prevBtn = carousel.querySelector('.prev');

  let index = 0;

  function updateFeedback() {
    track.style.transform = `translateX(-${index * 100}%)`;
  }

  nextBtn.addEventListener('click', () => {
    index = (index + 1) % slides.length;
    updateFeedback();
  });

  prevBtn.addEventListener('click', () => {
    index = (index - 1 + slides.length) % slides.length;
    updateFeedback();
  });

});
setInterval(() => {
  index = (index + 1) % slides.length;
  updateFeedback();
}, 4000);


