let displaySlides = n => {
  let i;
  let slides = document.querySelectorAll('.slides__item');
  let dots = document.querySelectorAll('.carousel__indicators--dot');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
};

let slideIndex = 1;
displaySlides(slideIndex);

let plusSlides = n => {
  displaySlides((slideIndex += n));
};

let currentSlide = n => {
  displaySlides((slideIndex = n));
};
