let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-img');
const dots = document.querySelectorAll('.carousel-dot');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
    if (dots[i]) dots[i].classList.toggle('active', i === index);
  });
  currentSlide = index;
}

function nextSlide() {
  const newIndex = (currentSlide + 1) % slides.length;
  showSlide(newIndex);
}

function prevSlide() {
  const newIndex = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(newIndex);
}

function goToSlide(index) {
  showSlide(index);
}

// Optional: Auto-detect image orientation (add a class)
slides.forEach((img) => {
  img.onload = () => {
    if (img.naturalWidth > img.naturalHeight) {
      img.style.objectFit = 'cover';
    } else {
      img.style.objectFit = 'contain';
    }
  };
});
