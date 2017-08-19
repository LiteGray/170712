const header = document.querySelector('header');
const cart = header.querySelector('b.cart');
const moreNav = header.querySelector('ul.moreNav');

cart.addEventListener('click', function () {
  moreNav.style.display = 'block';
});
document.addEventListener('click', function (ev) {
  if (ev.target !== cart && ev.target !== moreNav) {
    moreNav.style.display = '';
  }
});