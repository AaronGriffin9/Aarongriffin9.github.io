window.onload = function() {
  nextSlide();
};

let slides = document.querySelectorAll('.slider-cont .slide');
let currentSlide = 0;
let slideInterval = setInterval(nextSlide, 5000);
const bar = document.getElementById('toggle1');
let show = document.getElementById('show');
let extra = document.getElementById('show-extra');
let hide = document.getElementById('hide');

let modal = document.getElementById('modal');
const modal_btn = document.getElementById('modal-btn');
const book = document.getElementById('book');
const modal_close_btn = document.getElementById('close-btn');
let close = document.getElementById("close");

bar.addEventListener("click", function(){
  const menu = document.getElementById('nav');
  menu.classList.toggle("display");
});

modal_btn.addEventListener("click", function(){
  modal.style.display = "block";
});

book.addEventListener("click", function(){
  modal.style.display = "block";
});

 modal_close_btn.addEventListener("click", function(){
  modal.style.display = "none";
});

close.addEventListener("click", function(){
  modal.style.display = "none";
});

show.addEventListener("click", function(){
  extra.classList.toggle("show-extra");
  hide.style.display = "block";
  show.style.display = "none";
});

hide.addEventListener("click", function(){
  extra.classList.toggle("show-extra");
  hide.style.display = "none";
  show.style.display = "block";
});

function nextSlide() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide showing';
}
