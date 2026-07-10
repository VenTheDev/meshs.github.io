const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".slider-nav a");

let currentSlide = 0;

function showSlide(index) {
    slides[currentSlide].classList.remove("active");
    dots[currentSlide].classList.remove("active");

    slides[index].classList.add("active");
    dots[index].classList.add("active");

    currentSlide = index;
}

slides[0].classList.add("active");
dots[0].classList.add("active");

dots.forEach((dot, index) => {
    dot.addEventListener("click", (e) => {
        e.preventDefault();
        showSlide(index);
    });
});

setInterval(() => {
    showSlide((currentSlide + 1) % slides.length);
}, 10000);