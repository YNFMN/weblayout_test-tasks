const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  a11y: {
		prevSlideMessage: 'Предыдущий отзыв',
    nextSlideMessage: 'Следующий отзыв',
	},
});
