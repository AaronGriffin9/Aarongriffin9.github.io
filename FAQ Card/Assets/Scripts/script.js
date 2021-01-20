let arrow1 = document.getElementById("arrow1");
let arrow2 = document.getElementById("arrow2");
let arrow3 = document.getElementById("arrow3");
let arrow4 = document.getElementById("arrow4");
let arrow5 = document.getElementById("arrow5");
let para1 = document.getElementById("para1");
let para2 = document.getElementById("para2");
let para3 = document.getElementById("para3");
let para4 = document.getElementById("para4");
let para5 = document.getElementById("para5");

arrow1.addEventListener("click", arrowclick1)
arrow2.addEventListener("click", arrowclick2)
arrow3.addEventListener("click", arrowclick3)
arrow4.addEventListener("click", arrowclick4)
arrow5.addEventListener("click", arrowclick5)

function arrowclick1(){
  para1.classList.toggle('display');
  arrow1.classList.toggle("down");
  console.log("arrow clicked");
}
function arrowclick2(){
  para2.classList.toggle('display');
  arrow2.classList.toggle("down");
  console.log("arrow clicked");
}
function arrowclick3(){
  para3.classList.toggle('display');
  arrow3.classList.toggle("down");
  console.log("arrow clicked");
}
function arrowclick4(){
  para4.classList.toggle('display');
  arrow4.classList.toggle("down");
  console.log("arrow clicked");
}
function arrowclick5(){
  para5.classList.toggle('display');
  arrow5.classList.toggle("down");
  console.log("arrow clicked");
}
