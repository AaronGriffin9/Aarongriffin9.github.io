const bar = document.getElementById("menu");
bar.addEventListener("click", function(){
  const element = document.getElementById('navbar-height-responsive');
  const menu = document.getElementById("display");
  element.classList.toggle("navbar-height-normal");
  setTimeout(function() {
  menu.classList.toggle("transform");
}, 250);
});

console.log("hey");
