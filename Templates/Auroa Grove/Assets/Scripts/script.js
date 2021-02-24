window.onload = function() {
  nextSlide();
};

let slides = document.querySelectorAll('.slider-cont .slide');
let currentSlide = 0;
let slideInterval = setInterval(nextSlide, 5000);
const bar = document.getElementById('toggle1');

let modal = document.getElementById('modal');
const modal_btn = document.getElementById('modal-btn');
const modal_close_btn = document.getElementById('close-btn');
let close = document.getElementById("close");

bar.addEventListener("click", function(){
  const menu = document.getElementById('nav');
  menu.classList.toggle("display");
});

modal_btn.addEventListener("click", function(){
  modal.style.display = "block";
});

 modal_close_btn.addEventListener("click", function(){
  modal.style.display = "none";
});

close.addEventListener("click", function(){
  modal.style.display = "none";
});

function nextSlide() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide showing';
}
