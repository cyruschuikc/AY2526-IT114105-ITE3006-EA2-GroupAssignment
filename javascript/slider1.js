const slider = document.querySelector('.slider-images');
const imgs = document.querySelectorAll('.slider-images img');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let index = 0;
let interval;

/*the images to be displayed will be played in rotation.
the next image will be drawn from right to left 
until they completely replace the previous.   */
function showSlide(n) {
  index = (n + imgs.length) % imgs.length;
  slider.style.transform = `translateX(-${index * 100}%)`;
}

prevButton.addEventListener('click', () => {
  showSlide(index - 1);
});

nextButton.addEventListener('click', () => {
  showSlide(index + 1);
});

// auto-slide every 3 seconds
function startRotation() {
  interval = setInterval(() => {
    showSlide(index + 1);
  }, 3000);
}
function stopRotation() {
  clearInterval(interval);
}

// pause on hover
document.querySelector('.slider').addEventListener('mouseenter', stopRotation);
document.querySelector('.slider').addEventListener('mouseleave', startRotation);

startRotation();
