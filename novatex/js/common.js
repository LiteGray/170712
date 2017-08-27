const header = document.querySelector('header');
const cart = header.querySelector('b.cart');
const cartDot = header.querySelector('b.cart i');
const cartNum = header.querySelector('.cart-num');
const moreNav = header.querySelector('ul.moreNav');

const showMoreNav = () => {
  moreNav.style.display = 'block';
};
cart.addEventListener('click', showMoreNav);
// cartDot.addEventListener('click', showMoreNav);
document.addEventListener('click', function (ev) {
  if (ev.target !== cart && ev.target !== moreNav) {
    moreNav.style.display = '';
  }
});

function isCart(data) {
  if (data && data.length) {
    cartDot.classList.add('active');
    calCartNum(data);
  } else {
    cartDot.className = '';
  }
}
function calCartNum(data) {
  let sum = 0;
  data.forEach(e => {
    sum += e.num;
  });
  cartNum.innerHTML = `(${sum})`;
  // return sum;
}