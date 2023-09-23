document.querySelector('#slidePrevButton').onclick = function () {
  showSlide(-1);
};

document.querySelector('#slideNextButton').onclick = function () {
  showSlide(1);
};

const slides = document.getElementsByClassName('hero-slide-img');
const slidesLenght = slides.length;

var slideIndex = 0;
hideSlides();
showSlide(1);

function hideSlides() {
  for (i = 0; i < slidesLenght; i++) {
    slides[i].style.display = 'none';
  }
}

function showSlide(direction) {
  slideIndex += direction;

  var prevIndex = 0;
  var nextIndex = 0;

  if (slideIndex > slidesLenght) {
    slideIndex = 1;
  }
  if (slideIndex < 1) {
    slideIndex = slidesLenght;
  }

  if (slideIndex === 1) {
    prevIndex = slidesLenght;
    nextIndex = 2;
  } else if (slideIndex === slidesLenght) {
    prevIndex = slidesLenght - 1;
    nextIndex = 1;
  } else {
    prevIndex = slideIndex - 1;
    nextIndex = slideIndex + 1;
  }

  slides[slideIndex - 1].style.display = 'block';
  slides[prevIndex - 1].style.display = 'none';
  slides[nextIndex - 1].style.display = 'none';
}
