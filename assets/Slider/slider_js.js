// const slider = document.querySelector('.slider');
// const slides = document.querySelectorAll('.slide');
// let currentIndex = 0;

// function nextSlide() {
//   slides[currentIndex].classList.remove('active');
//   currentIndex = (currentIndex + 1) % slides.length;
//   slides[currentIndex].classList.add('active');
//   updateSlider();
// }

// function prevSlide() {
//   slides[currentIndex].classList.remove('active');
//   currentIndex = (currentIndex - 1 + slides.length) % slides.length;
//   slides[currentIndex].classList.add('active');
//   updateSlider();
// }

// function updateSlider() {
//   slider.style.transform = `translateX(-${currentIndex * (100 / slides.length)}%)`;
// }

// setInterval(nextSlide, 3000);

// // Optionally, you can add event listeners for left and right arrow keys:
// document.addEventListener('keydown', (event) => {
//   if (event.key === 'ArrowLeft') {
//     prevSlide();
//   } else if (event.key === 'ArrowRight') {
//     nextSlide();
//   }
// });

// // Initialize the first slide as active
// slides[currentIndex].classList.add('active');

const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
let currentIndex = 0;
function updateSlider() {
    slider.style.transform = `translateX(${-currentIndex * 100}%)`;
}
function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
}
// Automatic slide change (every 5 seconds)
setInterval(() => {
    nextSlide();
}, 3000);
updateSlider();
