let portfolioBlock = document.getElementById('portfolioBlock');

if (portfolioBlock) {
  AOS.init();
}

let burger = document.getElementById('burger');

function menuClose(e) {
  let { target } = e;
  let menu = document.getElementById('burger');
  let closeBtn = document.getElementById('close-burger');
  let el = document.getElementsByClassName('offcanvas-backdrop')[0];
  if ((e.target == closeBtn) || (e.target == el)) {
    menu.classList.remove('active');
  }
}

document.addEventListener('click', menuClose );

burger.addEventListener('click', function () {
  this.classList.add('active')
})
