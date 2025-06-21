let slideIndex = 0;
let slideTimer;

function showSlides(n) {
  const slides = document.getElementsByClassName("slide");

  if (n >= slides.length) slideIndex = 0;
  if (n < 0) slideIndex = slides.length - 1;

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex].style.display = "block";
}

function plusSlides(n) {
  clearInterval(slideTimer); // Reset timer when manually navigating
  showSlides(slideIndex += n);
  autoSlide(); // Restart auto sliding
}

function autoSlide() {
  slideTimer = setInterval(() => {
    slideIndex++;
    showSlides(slideIndex);
  }, 5000); // change image every 5 seconds
}

document.addEventListener("DOMContentLoaded", () => {
  showSlides(slideIndex);
  autoSlide();
});
