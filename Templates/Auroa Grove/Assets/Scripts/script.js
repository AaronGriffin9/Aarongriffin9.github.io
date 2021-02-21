window.onload = function() {
  nextSlide();
};
let slides = document.querySelectorAll('.slider-cont .slide');
let currentSlide = 0;
let slideInterval = setInterval(nextSlide, 5000);
const bar = document.getElementById('toggle1');

bar.addEventListener("click", function(){
  const menu = document.getElementById('nav');
  menu.classList.toggle("display");
});

function nextSlide() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide showing';
}
