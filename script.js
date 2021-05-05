/*  Night mode */

const content = document.body;
const main = document.querySelectorAll('description', 'p', 'a', 'h2');
const nightMode = document.getElementById("dark-change");
const menu = document.getElementById('menu')
const bar = document.getElementsByClassName('navigation')
const lWidth = window.screen.width

nightMode.addEventListener('click', function () {
  nightMode.classList.toggle('active');
  content.classList.toggle('night');
})

function events() {
  for (var i = 0; i < bar.length; i++) {
    bar[i].style.display = 'block';
  }
}
function block() {
  for (var i = 0; i < bar.length; i++) {
    bar[i].style.display = 'none';
  }
}

menu.addEventListener(('touchstart'), events);
// menu.addEventListener(('touchmove'), events);
menu.addEventListener(('click'), block);




