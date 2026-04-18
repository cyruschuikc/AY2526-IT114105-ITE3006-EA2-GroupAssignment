const imgs = document.querySelectorAll('.slider-images img');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let index = 0;

imgs[index].classList.add('active');

// photos displayed in rotation
function showSlide(n) {
    imgs[index].classList.remove('active');
    index = (n + imgs.length) % imgs.length;
    imgs[index].classList.add('active');
}

prevButton.addEventListener('click', () => {
    showSlide(index - 1);
});

nextButton.addEventListener('click', () => {
    showSlide(index + 1);
});

// the photo switching interval is 3 second
setInterval(() => {
    showSlide(index + 1);
}, 3000);