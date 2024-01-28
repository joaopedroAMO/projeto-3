let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.product-slider img');
    const thumbnails = document.querySelectorAll('.thumbnail');

    slides.forEach((slide, i) => {
        if (i === index) {
            slide.classList.add('active');
            thumbnails[i].classList.add('active');
        } else {
            slide.classList.remove('active');
            thumbnails[i].classList.remove('active');
        }
    });

    currentSlide = index;
}

function prevSlide() {
    showSlide((currentSlide - 1 + 3) % 3);
}

function nextSlide() {
    showSlide((currentSlide + 1) % 3);
}

document.addEventListener('DOMContentLoaded', function () {
    showSlide(currentSlide);
});
