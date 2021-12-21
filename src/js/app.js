import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  const prod = document.querySelector('.product');
  const span = document.querySelector('.price').textContent;
  prod.setAttribute('data-price',span);


});
